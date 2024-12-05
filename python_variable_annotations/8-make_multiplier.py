#!/usr/bin/env python3
"""
Type-annoted function "make_multiplier" that takes
a float as argument and returns a function
that multiplies another float by the argument
"""

from typing import Callable

multiplyfunction = Callable[[float], float]


def make_multiplier(multiplier: float) -> multiplyfunction:
    def multiply(x: float) -> float:
        return x * multiplier
    return multiply
