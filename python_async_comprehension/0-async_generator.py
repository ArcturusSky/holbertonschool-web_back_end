#!/usr/bin/env python3
"""
Module to illustrate a basic async generator
"""


import random
from typing import AsyncGenerator
import asyncio


async def async_generator() -> AsyncGenerator[int, None]:
    """
    Basic coroutine that will loop 10 times, each time asynchronously
    wait 1 seconed
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
