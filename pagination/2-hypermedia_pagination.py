#!/usr/bin/env python3
"""
Module to paginate simple data
"""

import csv
import math
from typing import List, TypedDict, Optional

index_range = __import__('0-simple_helper_function').index_range


class Hypermedia(TypedDict):
    """
    TypedDict to define the structure of the dictionary
    returned by the get_hyper function.
    """
    page_size: int
    page: int
    data: List[List]
    next_page: Optional[int]  # Optional because it can be None
    prev_page: Optional[int]
    total_pages: int


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Function to get a specific page of the dataset
        """

        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0

        if (
                page > 10 or page_size > 10) or (
                    page < 1 or page_size < 1):
            return []

        data = self.dataset()

        start, end = index_range(page, page_size)
        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Hypermedia:
        """
        Function to return a dictionary matching the Hypermedia TypedDict.
        """

        full_dataset = self.dataset()
        total_pages = math.ceil(len(full_dataset) / page_size)
        # Note: math.ceil is used to have always the above positv integer
        # in case of float.

        data = self.get_page(page, page_size)
        next_page = (page + 1)
        if next_page > total_pages:
            next_page = None
        previous_page = (page - 1)
        if previous_page < 1:
            previous_page = None

        Hyper = {
            'page_size': page_size,
            'page': page,
            'data': data,
            'next_page': next_page,
            'previous_page': previous_page,
            'total_pages': total_pages
        }
        return Hyper
