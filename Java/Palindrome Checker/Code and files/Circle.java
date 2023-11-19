public class Circle {
  
  // Instance variables
  private double radius;
  private String color;
  private int x;
  private int y;

  // constructor method
  public Circle()
  {
    System.out.print("I just got called");
  }

  public Circle(double R, String c, int x1, int y1) {
    this.radius = R;
    this.color = c;
    this.x = x1;
    this.y = y1;
  }
  
  public double getRadius()
  {
    return this.radius;
  }

  public String getColour() {
    return this.color;
  }

  public int getX() {
    return this.x;
  }

  public int getY() {
    return this.y;
  }

  public void setRadius(double a){
    this.radius = a;
  }

  public void setColour(String b) {
    this.color = b;
  }

  public void setX(int c) {
    this.x = c;
  }
  
  public void setY(int d){
    this.y = d;
  }
  //
}// public class Circle ends here