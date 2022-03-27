import os
import sys
f = open("task1.txt", "w")

dir_list=os.listdir(sys.argv[1])
for element in dir_list:
    f.write(element+"\n")
f.close()

#open and read the file after the appending:
f = open("task1.txt", "r")
print(f.read())
