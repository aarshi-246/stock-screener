import pymongo

# Function to fetch data from MongoDB with filtering
def fetch_filtered_stock_data_from_mongodb(min_open_price, max_open_price):
    # Connect to MongoDB
    client = pymongo.MongoClient("mongodb+srv://database:pass1234@cluster0.lgfoq8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    # Access the database
    db = client["screener"]
    # Access the collection
    collection = db["stock_screener"]
    
    # Define the aggregation pipeline with $match stage for filtering
    pipeline = [
        {
            "$match": {
                "livePriceDto.open": {
                    "$gte": min_open_price,
                    "$lte": max_open_price
                }
            }
        }
    ]
    
    # Perform aggregation with the defined pipeline
    filtered_data = collection.aggregate(pipeline)
    
    # Close the MongoDB connection
    client.close()
    
    return filtered_data

# Define price range
min_open_price = 2500  # Minimum open price
max_open_price = 2700  # Maximum open price

# Fetch filtered stock data from MongoDB
filtered_data = fetch_filtered_stock_data_from_mongodb(min_open_price, max_open_price)

# Print filtered records
for record in filtered_data:
    print(record)
