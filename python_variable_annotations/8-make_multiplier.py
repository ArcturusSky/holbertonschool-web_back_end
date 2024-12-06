#!/usr/bin/env python3
"""
Type-annoted function "make_multiplier" that takes
a float as argument and returns a function
that multiplies another float by the argument
"""

from typing import Callable

multiplyfunction = Callable[[float], float]


def make_multiplier(multiplier: float) -> multiplyfunction:
    """
    Function that takes a multiplier as argument
    and returns a function
    """
    def multiply(x: float) -> float:
        """
        Returned function that multiplies its argument
        by the multiplier
        """
        return x * multiplier
    return multiply
