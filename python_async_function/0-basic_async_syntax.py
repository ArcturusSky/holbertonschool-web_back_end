#!/usr/bin/env python3
"""
Module to demonstrate the basic syntax of an async function
"""

import asyncio
import random


async def wait_random(max_delay: int =10 ) -> float:
    """
    Function that will wait a random amount
    of time between 0 and "max_delay".
    Default value 10sec
    """
    waiting_time = random.uniform(0, max_delay)
    await asyncio.sleep(waiting_time)
    return waiting_time
