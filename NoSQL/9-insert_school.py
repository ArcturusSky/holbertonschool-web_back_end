#!/usr/bin/env python3
"""
Module to illustrate mongodb use with Python
"""


def insert_school(mongo_collection, **kwargs):
    """
    Insert a new document in the collection
    based on kwargs
    """

    documents = mongo_collection.insert_one(kwargs)

    return documents.inserted_id
