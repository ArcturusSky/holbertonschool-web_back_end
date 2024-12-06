#!/usr/bin/env python3
"""
Type-annoted function "to_kv" that takes a string and
an int OR a float as arguments and returns a tuple.
The first element of the tuple is a string.
The second element is the square of the int/float
and should be annoted as a float.
"""


from typing import Union, Tuple

IntOrFloat = Union[int, float]
Tuple_str_float = Tuple[str, float]


def to_kv(k: str, v: IntOrFloat) -> Tuple_str_float:
    "Function that returns a tuple"
    return (k, (v * v))
