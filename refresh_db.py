import pymongo
import requests
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import schedule
import time

all_company_data_url = "https://groww.in/v1/api/stocks_data/v1/all_stocks"

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'x-app-id': 'growwWeb',
    'Cookie': '__cf_bm=IU8OMqqsTmoiw8YA5JJ1yZA5QJ8E9GuSokFf.f4d3JA-1712395148-1.0.1.1-FfKfgl7.0DKxT4qQCnUeo4oVujEmFQNOUtnB3byTKnZ.QcK_GYIS6COPgwIDVkOejIVjUXY3EhJxO9xBkOKoJA; __cfruid=6a30d965fa39522703b8dd65e703f736872441fd-1712395148; _cfuvid=mjNkvA.PHfpgmB83KvxPyCCG7oK8wWmsYSj8O1wV2Vg-1712395148751-0.0.1.1-604800000'
}

params = {
    'listFilters': {
        'INDUSTRY':[],'INDEX':[]
    },
    'objFilters':{
        'CLOSE_PRICE':{'max':100000,'min':0},
        'MARKET_CAP':{'min':0,'max':2000000000000000}

    },
    'page':'1',
    'size':'100',
    'sortBy':'NA',
    'sortType':'ASC'
}

class RefreshDb:
    def __init__(self):
        client = pymongo.MongoClient("mongodb+srv://database:pass1234@cluster0.lgfoq8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        db = client["screener"]
        self.collection = db["stock_screener"]

    def format_data(self, data):
        parsed_data = {}
        for record in data["records"]:
            search_id = record["searchId"]
            parsed_data[search_id] = record
        return parsed_data

    def get_all_company_data(self, url, headers, params):
        print("Fetching data from all stock Api...")
        response = requests.post(url, headers=headers, json=params)
        if response.status_code == 200:
            data = response.json()
            return data["records"]
        else:
            print("Error Fetching data from Api...")

    def save_data_to_db(self, data):
        try:
            if data is not None:
                self.collection.delete_many({})
                self.collection.insert_many(data)
                print("Data inserted successfully...")
        except Exception as e:
            print(f"Error Storing Data: #{e}...")

def refresh_database():
    obj = RefreshDb()
    all_company_data = obj.get_all_company_data(all_company_data_url, headers, params)
    obj.save_data_to_db(all_company_data)

if __name__ == '__main__':
    try:
        print("Running Scheduler...")
        schedule.every(0.1).minutes.do(refresh_database)
        while True:
            schedule.run_pending()
            time.sleep(1)

    except Exception as e:
        print(f"Error Refreshing Data: #{e}...")

