import os
import sys

path =sys.argv[1]
f=open(path,"r")

myfile=open("output.ejs","w")
myfile.write("<pre>")
for x in f:
    myfile.write(x+"\n")
myfile.write("</pre>")
f.close()
myfile.close()
