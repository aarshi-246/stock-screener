from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from urllib.parse import urlparse, parse_qs

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
        filter_param = query_params.get('param', [None])[0]
        response_data = {"message": f"Filtered data based on parameter: {filter_param}"}
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
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

