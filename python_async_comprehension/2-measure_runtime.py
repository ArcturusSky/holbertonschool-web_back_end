#!/usr/bin/env python3
"""
Module to measure the runtime of the
async comprehension function executed 4 times in parallel
"""


import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Function to measure the runtime
    """

    start_time = time.time()
    tasks = [async_comprehension() for _ in range (4)]
    await asyncio.gather(*tasks)
    end_time = time.time()

    return (end_time - start_time) 
