#!/usr/bin/env python3
"""
Module to to try something far more complex
with Mongodb
"""


from pymongo import MongoClient


def log_stats():
    """
    Function to get the stats of the logs
    """
    client = MongoClient()
    nginx_collection = client.logs.nginx

    # I used the easiest and straightfoward way
    # to count. And {} alones means "everything"
    count = nginx_collection.count_documents({})
    count_GET = nginx_collection.count_documents({"method": "GET"})
    count_POST = nginx_collection.count_documents({"method": "POST"})
    count_PUT = nginx_collection.count_documents({"method": "PUT"})
    count_PATCH = nginx_collection.count_documents({"method": "PATCH"})
    count_DELETE = nginx_collection.count_documents({"method": "DELETE"})
    count_GET_with_path = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"})

    print(f"{count} logs")
    print("Methods:")
    print(f"\tmethod GET: {count_GET}")
    print(f"\tmethod POST: {count_POST}")
    print(f"\tmethod PUT: {count_PUT}")
    print(f"\tmethod PATCH: {count_PATCH}")
    print(f"\tmethod DELETE: {count_DELETE}")
    print(f"{count_GET_with_path} status check")

    if __name__ == "__main__":
        log_stats()
