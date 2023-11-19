public class Car {

  private String make;
  private String model;

  
// constructor
  public Car(String MA, String MO) {
    this.make = MA;
    this.model = MO;
    System.out.print("function Car");
  }

  
// accessors
  public String getMake() {
    return this.make;
  }
  public String getModel() {
    return this.model;
  }


// mutators
  public void setMake(String a) {
    this.make = a;
  }

  public void setModel(String b) {
    this.model = b;
  }
  

}// end of class