#!/usr/bin/env python3
"""
Module to illustrate mongodb use with Python
"""


def list_all(mongo_collection):
    """
    List all documents in the given collection
    """

    documents = mongo_collection.find()

    return documents
