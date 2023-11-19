public class ToolBox {

    //these are class instance variables
    //private because they cannot be seen
    // outside the class
    private String classText;
    private int classNumber;

    //constructor
    public ToolBox (String initString, int initFactor){
        classNumber=initFactor;
        classText=initString;
    }//end constructor ToolBox

    //accessor 
    public int getClassNumber(){
        return this.classNumber;
    }//end accessor

    //mutator
    public void setClassNumber(int classNumber) {
        this.classNumber = classNumber;
    }//end mutator
}//end class
