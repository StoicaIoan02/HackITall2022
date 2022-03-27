import sys
import os
if len(sys.argv)>1 :
    dir_list=os.listdir(sys.argv[1])
else :
    dir_list=os.listdir()
f = open("output.ejs", "w")
f.write("<pre>")
for element in dir_list:
    f.write(element+"\n")
f.write("</pre>")
f.close()