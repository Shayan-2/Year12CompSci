#will need for random integer generation
import random
#constructor
class grid:
  def __init__(self,c,r):
    #instance variables
    self.rows=r
    self.cols=c
    self.Matrix = [[0 for x in range(self.rows)] for y in range(self.cols)]
  
   #instance method can access object attributes row,col,Matrix
  def output_matrix(self):
    for i in range(self.cols):
      for j in range(self.rows):
        print(str((self.Matrix[i][j]))+" ",end="")
      print("")
      #print("")

  def fill_matrix(self):
      for i in range(self.cols):
        for j in range(self.rows):
          self.Matrix[i][j]=random.randint(65,90)
          print(str(chr(self.Matrix[i][j]))+" ",end="")
        print("")
        #print("")