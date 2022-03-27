import os
import sys

path =sys.argv[1]
f=open(path,"r")

myfile=open("task2.txt","w")
for x in f:
    myfile.write(x+"\n")

f.close()
myfile.close()
