rfh = open("Sample.txt")
rts = open("output.txt", "w")

state = 1
for lineFile in rfh:
    for i in lineFile:
        if state == 1:
            #lower case and upper case letters
            if ord(i) >= 65 and ord(i) <= 90:
                state = 2
                rts.write(i)
            elif ord(i) >= 97 and ord(i) <= 122:
                j = chr(ord(i)-32)
                state = 2
                rts.write(j)

            #for dealing with punctuations in state 1
            elif i == " " or i == "," or i == "?":
                state = 1

        elif state == 2:

            #lower case and upper case letters
            if i >= "a" and i <= "z":
                state = 2
                rts.write(i)
            elif i >= "A" and i <= "Z":
                state = 2
                k = chr(ord(i)+32)
                rts.write(k)

            #for spaces, ascii value = 32
            elif i == " ":
                state = 4
                #rts.write(i)

            #punctuations, specifically full stop and question mark
            elif i == "." or i == "?" or i == "!":
                rts.write(i)
                state = 3

            #inputting commas after a letter
            elif i == ",":
                l = ","
                rts.write(l)
                state = 4

            elif i == "\n":
                state = 4

            elif i == "i":
                state = 5
                rts.write("")

        #state 3 is only used for spaces
        elif state == 3:
            if ord(i) == 32:
                state = 1
                rts.write(i)

        #state 4 in use for actions after spacing
        elif state == 4:

            if i == "i":
                state = 5

            #whenever a punctuation or second space is present after a space, those values should be discarded
            elif i == "," or i == " " or i == "\n":
                state = 4

            #any letter inputted after the space
            elif ord(i) >= 65 and ord(i) <= 90:
                rts.write(" ")
                j = chr(ord(i) + 32)
                state = 2
                rts.write(j)

            elif ord(i) >= 97 and ord(i) <= 122:
                rts.write(" ")
                state = 2
                rts.write(i)

            elif i == "?" or i == ".":
                state = 3
                rts.write(i)
               # rts.write(" ")

        #state 5 capitalises lone letters
        elif state == 5:
            if i == " ":
                rts.write(" I")
                state = 4

            else:
                rts.write("i")
                rts.write(i)
                state = 2



rts.close()
rfh.close()