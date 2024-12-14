#!/usr/bin/env python3
"""
Module to illustrate mongodb use with Python
"""


def schools_by_topic(mongo_collection, topic):
    """
    Return the list of school having a specific topic
    """

    schools = mongo_collection.find({"topics": topic})
    return schools
