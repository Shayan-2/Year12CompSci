public class palinCheck {

  private String stringName;
  private int intNumber;
  private boolean isPalindrome;

  // constructor  
  public palinCheck(String nameStr, int numInt) {
    this.stringName = nameStr;
    this.intNumber = numInt;
    this.isPalindrome = false; }

  // accessor
  public String getName() {
    return this.stringName; }
  public int getNum() {
    return this.intNumber; }
  public boolean getPal() {
    return this.isPalindrome;  }

  // mutators
  public void setName(String a) {
    this.stringName = a; }
  public void setNum(int b) {
    this.intNumber = b; }
  public void setPal(boolean c) {
    this.isPalindrome = c;  }

// capitalise
  public void CapLow() {
    int loopCount = 1;
    for (loopCount = 1; loopCount < this.stringName.length(); loopCount++){
      int h = this.stringName.charAt(loopCount);
      if (h >= 65 && h <= 90) {
        int l = h + 32;
        char[] myNameChars = this.stringName.toCharArray();
        myNameChars[loopCount] = (char) l;
        this.stringName = String.valueOf(myNameChars);
        
        // System.out.println("Capital letter.");
      }   
    }
    int t = 0;
    int h = this.stringName.charAt(t);
    if (h >= 97 && h <= 122) {
      int r = h - 32;
      char[] myNameChars = this.stringName.toCharArray();
      myNameChars[0] = (char) r;
      this.stringName = String.valueOf(myNameChars);
    }
  } // end capital function

  public void checkPal() {
    char[] myNameChars = this.stringName.toCharArray();
    int i = 0;
    int j = this.stringName.length() - 1;
    for (i = 0, j = this.stringName.length() - 1; i <= j; i++, j--) {
      int h = myNameChars[i];
      if (h >= 65 && h <= 90) {
        int k = h + 32;
        myNameChars[i] = (char) k;
      }
      int l = myNameChars[j];
      if (l >= 65 && l <= 90) {
        int q = l + 32;
        myNameChars[j] = (char) q;
      }

      
      if (myNameChars[i] != myNameChars[j]) {
       this.isPalindrome = false;
        return;
      }
      else {
        this.isPalindrome = true;
      }
    }
  } // checkPal end
  
  
}