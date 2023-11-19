from tkinter import*
from planeClass import planeClass
import tkinter
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import axes3d, Axes3D 
root = Tk()

#defining our Label but only outputting it unit we click button
text1 = Label(root,text = "X +")
text1.grid(row=0, column=1)
text2 = Label(root,text = "X +")
text2.grid(row=1, column=1)
text3 = Label(root,text = "X +")
text3.grid(row=2, column=1)

text1 = Label(root,text = "Y +")
text1.grid(row=0, column=3)
text2 = Label(root,text = "Y +")
text2.grid(row=1, column=3)
text3 = Label(root,text = "Y +")
text3.grid(row=2, column=3)

text1 = Label(root,text = "Z +")
text1.grid(row=0, column=5)
text2 = Label(root,text = "Z +")
text2.grid(row=1, column=5)
text3 = Label(root,text = "Z +")
text3.grid(row=2, column=5)

text1 = Label(root,text = "= 0")
text1.grid(row=0, column=7)
text2 = Label(root,text = "= 0")
text2.grid(row=1, column=7)
text3 = Label(root,text = "= 0")
text3.grid(row=2, column=7)

# the following 'entry' boxes are for the user to put in any integers

entry1 = Entry(root, width=4, borderwidth=5)
entry1.grid(row=0, column=0)
entry1.insert(0, "a1")

entry2 = Entry(root, width=4, borderwidth=5)
entry2.grid(row=1, column=0)
entry2.insert(0, "a2")

entry3 = Entry(root, width=4, borderwidth=5)
entry3.grid(row=2, column=0)
entry3.insert(0, "a3")

entry4 = Entry(root, width=4, borderwidth=5)
entry4.grid(row=0, column=2)
entry4.insert(0, "b1")

entry5 = Entry(root, width=4, borderwidth=5)
entry5.grid(row=1, column=2)
entry5.insert(0, "b2")

entry6 = Entry(root, width=4, borderwidth=5)
entry6.grid(row=2, column=2)
entry6.insert(0, "b3")

entry7 = Entry(root, width=4, borderwidth=5)
entry7.grid(row=0, column=4)
entry7.insert(0, "c1")

entry8 = Entry(root, width=4, borderwidth=5)
entry8.grid(row=1, column=4)
entry8.insert(0, "c2")

entry9 = Entry(root, width=4, borderwidth=5)
entry9.grid(row=2, column=4)
entry9.insert(0, "c3")

entry10 = Entry(root, width=4, borderwidth=5)
entry10.grid(row=0, column=6)
entry10.insert(0, "d1")

entry11 = Entry(root, width=4, borderwidth=5)
entry11.grid(row=1, column=6)
entry11.insert(0, "d2")

entry12 = Entry(root, width=4, borderwidth=5)
entry12.grid(row=2, column=6)
entry12.insert(0, "d3")

# this one specifically for the final solution, whatever our D is equal to
entry13 = Entry(root, width=35, borderwidth=5)
entry13.grid(row=3, column=1, columnspan=6)
entry13.insert(0, "output solution here")



#buttonClick, for clicking the button
def buttonClick():

  #print to console
  a = int(entry1.get())
  print("a =", a)

  b = int(entry4.get())
  print("b =", b)

  c = int(entry7.get())
  print("c =", c)

  d = int(entry2.get())
  print("d =", d)

  e = int(entry5.get())
  print("e =", e)

  f = int(entry8.get())
  print("f =", f)

  g = int(entry3.get())
  print("g =", g)

  h = int(entry6.get())
  print("h =", h)

  i = int(entry9.get())
  print("i =", i)

  j = int(entry10.get())
  print("j =", j)

  k = int(entry11.get())
  print("k =", k)

  l = int(entry12.get())
  print("l =", l)

  deter_A = a*(e*i - f*h) - b*(d*i - f*g) + c*(d*h - e*g)
  print("Output solution:", deter_A)

  x = ( (j*(e*i - f*h) - b*(k*i - f*l) + c*(k*h - e*l)) / deter_A ) * -1
  print("x =", x)

  y = ( (a*(k*i - f*l) - j*(d*i - f*g) + c*(d*l - k*g)) / deter_A ) * -1
  print("y =", y)

  z = ( (a*(e*l - k*h) - b*(d*l - k*g) + j*(d*h - e*g)) / deter_A ) * -1
  print("z =", z)

  entry13.delete(0, END)
  entry13.insert(0, str(deter_A))

  fig = plt.figure()
  
  pl = planeClass(a,b,c,j)
  pl.plotting()

  ax = fig.add_subplot(111,projection='3d')
  ax.plot_surface(pl.XX, pl.YY, pl.ZZ, alpha=0.2)
  
  pl = planeClass(d,e,f,k)
  pl.plotting()
  
  ax.plot_surface(pl.XX, pl.YY, pl.ZZ, alpha=0.2)

  pl = planeClass(g,h,i,l)
  pl.plotting()
  
  ax.plot_surface(pl.XX, pl.YY, pl.ZZ, alpha=0.2)

  plt.show()
  
  return

button_1 = Button(root, text="process", command = buttonClick) 

# placement of the button in GUI template
button_1.grid(row=3, column=0)

# always use to end the execution of the tkinter program
root.mainloop()