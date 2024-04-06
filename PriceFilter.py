import pymongo

def fetch_filtered_stock_data_from_mongodb(min_open_price=None, max_open_price=None, min_volume=None):
    # Connect to MongoDB
    client = pymongo.MongoClient("mongodb+srv://database:pass1234@cluster0.lgfoq8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    # Access the database
    db = client["screener"]
    # Access the collection
    collection = db["stock_screener"]
    
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

# Define price range (optional)
min_open_price = None  # Minimum open price
max_open_price = None  # Maximum open price

# Define minimum volume filter value (optional)
min_volume_value = 500000   # Minimum volume threshold

# Fetch filtered stock data from MongoDB with optional minimum volume filter
filtered_data = fetch_filtered_stock_data_from_mongodb(min_open_price, max_open_price, min_volume_value)

# Print filtered records
print("########### Filtered Data ##############")
for record in filtered_data:
    print(record)
