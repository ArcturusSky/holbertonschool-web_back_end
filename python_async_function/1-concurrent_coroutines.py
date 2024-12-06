#!/usr/bin/env python3
"""
Module to illustrate several coroutine at the same times
"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function that return the list of all the delays (as float values)
    in ascending order
    """
    # List of coroutines to do
    tasks: List[float] = [
        wait_random(max_delay) for i in range(n)]

    # Use asyncio.gather to execute all the coroutine
    # on the same time and waiting all their results in once
    waiting_time_list = await asyncio.gather(*tasks)
    # Haha is that a pointer toward the list of task to do?

    return sorted(waiting_time_list)
