#!/usr/bin/env python3
"""
Module to measure the runtime of the
previous async generator function 4 times
"""


import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Function to measure the runtime
    """

    start_time = time.time()
    await async_comprehension()
    end_time = time.time()

    return (end_time - start_time) 
