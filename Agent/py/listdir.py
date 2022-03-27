import sys
import os
if len(sys.argv)>1 :
    print(os.listdir(sys.argv[1]))
else :
    print(os.listdir())
