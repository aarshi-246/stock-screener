from db import connect_to_db
from listSearch import get_response, single_record_url, parse_search_json, get_data_matched_string
# from util import all_stocks_url, single_record_url

def main():
    db_name = 'stock-screener'
    mycollection = connect_to_db(db_name)
    get_data_matched_string(single_record_url)

if __name__ == "__main__":
    main()