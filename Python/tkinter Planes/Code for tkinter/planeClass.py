import numpy as np

class planeClass:
  def __init__(self, a,b,c,d):
    # coordinates of normal
    self.a = a
    self.b = b
    self.c = c
    self.d = d

    # mesh grid coordinates
    self.XX = []
    self.YY = []
    self.ZZ = []

  # calculates the surface coordinates
  def plotting(self):

    normal = np.array([self.a, self.b, self.c])
    print(self.d)

    if self.a !=0:
      self.YY, self.ZZ= np.meshgrid(range(20), range(20))
      self.XX = (self.d-(self.b*self.YY + self.c*self.ZZ )) / self.a
    elif self.b!=0:
      self.XX, self.ZZ= np.meshgrid(range(20), range(20))
      self.YY = (self.d-(self.a*self.XX + self.c*self.ZZ )) / self.b
    elif self.c!=0:
      self.XX, self.YY= np.meshgrid(range(20), range(20))
      self.ZZ = (self.d-(self.a*self.XX + self.b*self.YY )) / self.c
    #else:
     # print("Error: plane is parallel to the x-axis")

    return