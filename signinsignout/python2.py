#!/bin/python

import math
import os
import random
import re
import sys

#
# Complete the 'processLogs' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts following parameters:
#  1. STRING_ARRAY logs
#  2. INTEGER maxSpan
#

def processLogs(logs, maxSpan):
    # Write your code here

if __name__ == '__main__':
    fptr = sys.stdout

    logs_count = int(raw_input().strip())

    logs = []

    for _ in xrange(logs_count):
        logs_item = raw_input()
        logs.append(logs_item)

    maxSpan = int(raw_input().strip())

    result = processLogs(logs, maxSpan)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()
