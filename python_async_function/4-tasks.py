#!/usr/bin/env python3
"""
Module from the "1-concurrent_coroutines"
changed to use "3-tasks" instead of wait-random
to illustrate the create.task function inside another
async function. So everything is nested.
"""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function that return the list of all the delays (as float values)
    in ascending order
    """
    # List of coroutines to do
    tasks: List[float] = [
        task_wait_random(max_delay) for i in range(n)]

    # Use asyncio.gather to execute all the coroutine
    # on the same time and waiting all their results in once
    waiting_time_list = await asyncio.gather(*tasks)
    # Haha is that a pointer toward the list of task to do?

    return sorted(waiting_time_list)
