import pymongo

def fetch_filtered_stock_data_from_mongodb(min_open_price=None, max_open_price=None, min_volume=None, min_market_cap=None):
    # Connect to MongoDB
    client = pymongo.MongoClient("mongodb+srv://database:pass1234@cluster0.lgfoq8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    # Access the database
    db = client["screener"]
    # Access the collection
    collection = db["stock_screener"]
    
    # Check if all filter parameters are None
    if min_open_price is None and max_open_price is None and min_volume is None and min_market_cap is None:
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
    
    # Add minimum marketCap filter if provided
    if min_market_cap is not None:
        match_conditions["marketCap"] = {"$gte": min_market_cap}
    
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
min_volume_value = None   # Minimum volume threshold

# Define minimum marketCap filter value (optional)
min_market_cap = None   # Minimum marketCap threshold

# Fetch filtered stock data from MongoDB with optional minimum volume and marketCap filters
filtered_data = fetch_filtered_stock_data_from_mongodb(min_open_price, max_open_price, min_volume_value, min_market_cap)

# Print filtered records
print("########### Filtered Data ##############")
for record in filtered_data:
    print(record)
