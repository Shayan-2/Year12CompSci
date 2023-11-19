from GridClass import grid

rows=int(input("please input number of rows "))
cols=int(input("please input number of cols "))

#create object
temp=grid(rows,cols)

#call class method with dot ‘.’
temp.output_matrix()
temp.fill_matrix()
temp.output_matrix()

#print(chr(randrange))