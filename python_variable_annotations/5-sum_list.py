#!/usr/bin/env python3
"""
Type-annoted function "sum_list" that takes a list of floats
as argument and returns theirs sums as a float
"""


from typing import List


list_of_floats = List[float]


def sum_list(input_list: list_of_floats) -> float:
    """
    Function that return the sum of the element as a float
    """
    return sum(input_list)
