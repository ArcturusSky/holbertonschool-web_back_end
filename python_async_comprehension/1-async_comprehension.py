#!/usr/bin/env python3
"""
Module to illustrate synx comprehension
"""


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """
    This function create a list with the 10 values inside
    """
    result = [value async for value in async_generator()]
    return result
