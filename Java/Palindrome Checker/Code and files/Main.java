import java.io.*;
import java.util.*;

public class Main {

  // File palinFile = new File(input.txt);
  // Scanner palinScan = new Scanner(palinFile);
  
    public static void main(String[] args) 
  throws FileNotFoundException {

      palinCheck myPalList[] = new palinCheck[50];
      try
        {
          String fileName = "input.txt";
          File fileText = new File(fileName);
           Scanner s = new Scanner(fileText);
           int count = 0;
           while (s.hasNext() == true ) {
           String word = s.next();
           int num = s.nextInt();

             myPalList[count]= new palinCheck(word, num);
            count++;   
           }//while           
               
        // print all elements
          int j = 0;
          for (j = 0; j < count; j++) {
            myPalList[j].checkPal();
            myPalList[j].CapLow();
            System.out.print(myPalList[j].getName());
            System.out.print(" ");
            System.out.print(myPalList[j].getNum());            
            if (myPalList[j].getPal() == true)
              System.out.println(" P");
            else
              System.out.println(" NP");
          }
          
        }// try
        catch(FileNotFoundException ex)  
        {
          // insert code to run when exception occurs
          System.out.println("File not found, error caught.");
        }// catch

    // palinCheck palCh2 = new palinCheck("propNAL", 550);
    // palCh2.CapLow();
    // System.out.println(palCh2.getName());
  }//end main
}//end class




//   Circle myCircle = new Circle();
// ToolBox myToolBox = new ToolBox("notebook", 30);

// System.out.println(myCircle.getRadius());
// System.out.println(myCircle.getColour());
// System.out.println(myCircle.getX());
// System.out.println(myCircle.getY());

// Circle mySecCircle = new Circle(15, "blue", 30, 20);

// System.out.println(mySecCircle.getRadius());
// System.out.println(mySecCircle.getColour());
// System.out.println(mySecCircle.getX());
// System.out.println(mySecCircle.getY());      

// int h = mySecCircle.getX();
// System.out.println(h);

// int k = 89;
// myCircle.setY(k);
// int m;
// m = myCircle.getY();
// System.out.println(m);


// System.out.println();