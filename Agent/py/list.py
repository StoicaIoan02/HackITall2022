import os
f = open("task1.txt", "w")
path = "C://Users//Vlad//Desktop//HackITall2022//Agent"
dir_list=os.listdir(path)
for element in dir_list:
    f.write(element+"\n")
f.close()

#open and read the file after the appending:
f = open("task1.txt", "r")
print(f.read())
