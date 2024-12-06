#!/usr/bin/env python3
"""
Type-annoted function "sum_mixed_list" which takes a list
of integers and floats and returns their sum as a float
"""

from typing import List, Union


MixedList = List[Union[int, float]]


def sum_mixed_list(mxd_lst: MixedList) -> float:
    """
    Function that a mixed list and return their sum as a float
    """
    return sum(mxd_lst)
