import sys
import os

path=sys.argv[1]
filename=sys.argv[2]
filepath = os.path.join(path, filename)
if not os.path.exists(path):
    os.makedirs(path)
f=open(filepath, "a")

f.close()
