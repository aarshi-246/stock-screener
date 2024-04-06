from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from urllib.parse import urlparse, parse_qs
import pymongo

def fetch_filtered_stock_data_from_mongodb(min_open_price=None, max_open_price=None, min_volume=None):
        # Connect to MongoDB
        client = pymongo.MongoClient("mongodb+srv://database:pass1234@cluster0.lgfoq8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        # Access the database
        db = client["screener"]
        # Access the collection
        collection = db["stock_screener"]

        # Check if all filter parameters are None
        if min_open_price is None and max_open_price is None and min_volume is None:
            # Return all records without applying any filter
            return collection.find({})

        # Define match conditions
        match_conditions = {}

        # Add price range conditions if provided
        if min_open_price is not None:
            match_conditions["livePriceDto.open"] = {"$gte": min_open_price}
        if max_open_price is not None:
            match_conditions.setdefault("livePriceDto.open", {})["$lte"] = max_open_price

        # Add minimum volume filter if provided
        if min_volume is not None:
            match_conditions["livePriceDto.volume"] = {"$gte": min_volume}

        # Define the aggregation pipeline with $match stage for filtering
        pipeline = [{"$match": match_conditions}]

        # Perform aggregation with the defined pipeline
        filtered_data = collection.aggregate(pipeline)

        # Close the MongoDB connection
        client.close()

        return filtered_data

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        
        if parsed_path.path == '/filter':
            self.handle_filter_request()
        elif parsed_path.path == '/search':
            self.handle_search_request()
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"404 Not Found")

    def handle_filter_request(self):
        query_params = parse_qs(urlparse(self.path).query)
        min_open_price = float(query_params.get('min_open_price', [None])[0]) if 'min_open_price' in query_params else None
        max_open_price = float(query_params.get('max_open_price', [None])[0]) if 'max_open_price' in query_params else None
        min_volume = float(query_params.get('min_volume', [None])[0]) if 'min_volume' in query_params else None
        print("---------------------")
        print(min_open_price, max_open_price, min_volume)
        filtered_data = fetch_filtered_stock_data_from_mongodb(min_open_price, max_open_price, min_volume)
        print(filtered_data)
        response_data = list(filtered_data)

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', 'http://localhost')
        self.send_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        self.end_headers()
        #   res.header("Access-Control-Allow-Origin", "http://localhost:3002");
    # res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        
        self.wfile.write(json.dumps(response_data).encode())

    def handle_search_request(self):
        query_params = parse_qs(urlparse(self.path).query)
        search_query = query_params.get('q', [None])[0]
        response_data = {"message": f"Search results for query: {search_query}"}
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response_data).encode())

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print("Starting Stock Screener API server...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print("Server stopped.")

