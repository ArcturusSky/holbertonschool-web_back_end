#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, TypedDict, Optional, Dict


class Hypermedia_page_data(TypedDict):
    """
    TypedDict to define the structure of the dictionary
    returned by the get_hyper_index function.
    """
    index: Optional[int]  # Optional because is None by default
    next_index: int
    data: List[List]
    page_size: int
    data: int


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: Optional[int] =
                        None, page_size: int = 10) -> Hypermedia_page_data:
        """
        Retrieves a page of data starting from the specified index,
        with the given page size, and handles missing rows
        due to deletions in the dataset.
        """

        # If no index is provided, default to 0
        if index is None:
            index = 0

        # Ensure the index is within the valid range of the dataset
        dataset = self.dataset()
        full_dataset = len(dataset)
        assert 0 <= index < full_dataset, "Index out of range"

        # Initialized an empty list to hold
        # elements
        page_data = []

        # Get dataset sorted previously
        sorted_dataset = self.indexed_dataset()

        # Start from the provided index
        current_index = index

        # Loop to appennd element until the page
        # is filled by enough items (page_size)
        while len(page_data) < page_size:

            # If the current index exists in the indexed dataset,
            # add it to the page
            if current_index in sorted_dataset:
                page_data.append(sorted_dataset[current_index])

            current_index += 1

        # After filling the page,
        # the next index will be the first index of the next page
        next_index = current_index

        return {
            'index': index,
            'next_index': next_index,
            'page_size': page_size,
            'data': page_data,
        }
