#!/usr/bin/env python3
"""
Module to illustrate a basic async generator
"""

import random
from typing import AsyncGenerator
import asyncio


async def async_generator() -> AsyncGenerator[float, None, None]:
    """
    Asynchronous generator that loops 10 times, waits for 1 second
    in each iteration, and yields a random float between 0 and 10.
    """
    for _ in range(10):  # Utilisation de _ au lieu de i si non utilisé
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
