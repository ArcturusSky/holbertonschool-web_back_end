#!/usr/bin/env python3
"""
Module to measure the runtime of the previous module
to run
"""

import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Function that measures the total execution
    time for wait_n(n, max_delay)
    and returns total_time / n.
    """
    start_time = time.time()
    # Save current time when starting

    asyncio.run(wait_n(n, max_delay))
    # Run a async function when being out of a sync func

    end_time = time.time()
    # Save current time when ending

    return (end_time - start_time) / n
