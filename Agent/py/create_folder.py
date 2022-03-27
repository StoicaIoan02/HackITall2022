import os
import sys

parent_dir=sys.argv[1]
directory=sys.argv[2]
path=os.path.join(parent_dir,directory)
os.mkdir(path)
