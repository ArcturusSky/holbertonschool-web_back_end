#!/usr/bin/env python3
"""
Module that takes a list of iterable elements and returns a list of tuples,
where each tuple contains an element and its corresponding length.
"""


from typing import List, Sequence, Iterable, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
