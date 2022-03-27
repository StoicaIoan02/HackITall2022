import os
import sys

f = open("task3.txt", "w")

pathh=sys.argv[1]
filename=sys.argv[2]
for file in os.listdir(pathh):
    if file.endswith(filename):
        print(os.path.join(pathh, file)+"\n")

f.close()
