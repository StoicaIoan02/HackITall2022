import sys
import os

pathh=sys.argv[1]
name=sys.argv[2]
f=open("task3.txt","w")
for root, dirs, files in os.walk(pathh):
    for file in files:
        if file.endswith(name):
             f.write(os.path.join(root, file)+"\n")

for root, dirs, files in os.walk(pathh):
    for dirr in dirs:
        if file.endswith(name):
             f.write(os.path.join(root, dirr)+"\n")
f.close()
