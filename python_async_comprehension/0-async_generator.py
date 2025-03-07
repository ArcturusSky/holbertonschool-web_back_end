#!/usr/bin/env python3
"""
Module to illustrate a basic async generator
"""

import random
import asyncio
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Asynchronous generator that loops 10 times, waits for 1 second
    in each iteration, and yields a random float between 0 and 10.
    """
    for _ in range(10):  # Using _ instead of "i" since not used
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
