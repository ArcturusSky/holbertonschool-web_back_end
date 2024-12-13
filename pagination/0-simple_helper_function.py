#!/usr/bin/env python3
"""
Module to paginate simple data
"""


from typing import Tuple


def index_range(page, page_size) -> Tuple[int, int]:
    """
    Function to return a tuple of indexes to
    return in a list for particular pagination
    parameters
    """

    start = (page - 1) * page_size
    end = start + page_size

    return (start, end)
