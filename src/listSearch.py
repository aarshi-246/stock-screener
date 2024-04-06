import requests
import json
import re
from db import connect_to_db

# Base URL without the last part
base_url = 'https://groww.in/v1/api/stocks_data/v1/company/search_id/'

# Variable representing the last part of the URL
company_name = 'the-indian-hotels-company-ltd'

# Construct the full URL by concatenating the base URL and the variable part
single_record_url = base_url + company_name + '?page=0&size=10'

def get_response(mycollection,url):
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        result = mycollection.insert_one(data)
        print("Document added successfully with ID:", result.inserted_id)
    else:
        print("Failed to fetch data")
        return

def get_data_matched_string():
    list_matched = parse_search_json()  # Assuming parse_search_json() returns the list of matched strings
    db_name = 'stock-screener-search'
    collection = connect_to_db(db_name)  # Connect to the database

    # List to store the fetched records
    matched_records = []

    # Iterate over the list of matched strings
    for search_string in list_matched:
        # Query the collection for records matching the current search string
        # Adjust the field name and query as per your database structure
        records = collection.find({'searchId': {'$regex': search_string, '$options': 'i'}})

        # Add the fetched records to the list
        matched_records.extend(records)

    return matched_records        

def parse_search_json():
    # Assuming you have the JSON string
    json_string = '{"search": "Indian"}' #frontend

    # Parse the JSON string
    parsed_json = json.loads(json_string)

    # Access the value associated with the key "search"
    search_value = parsed_json.get("search")

    print("Search value:", search_value)
    
    search_pattern = re.compile(r'.*{}.*'.format(re.escape(search_value)), re.IGNORECASE)
    
    list_of_strings = getList()
    list_matched = []
    # Iterate through the list of strings
    for string in list_of_strings:
        # Check if the search pattern matches the current string
        if search_pattern.match(string):
            print("Matching string:", string)
            list_matched.append(string)
    return list_matched

def getList():
    collection = connect_to_db()

    # Fetch all documents from the collection
    documents = collection.find({})
    print(documents)

    # # Extract the values of the "searchId" field from each document and put them into a list
    # search_ids = [doc['searchId'] for doc in documents]
    search_ids = []
    for doc in documents:
        search_ids.append(doc['searchId'])

    # Print the list of searchIds
    print("List of searchIds:", search_ids)
    return search_ids