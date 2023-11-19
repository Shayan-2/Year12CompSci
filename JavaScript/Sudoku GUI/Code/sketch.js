let x = [];
let y = [];
let r1=[]
let oldValue
 for (let i = 0; i < 81; i++) {
    y[i] = []; // create nested array
 }//for

class boxes {
  constructor(sel, val) {
    this.sel = createSelect();
    this.sel.changed(checkSelected);
    this.sel.val = val;

    //this.sel.position(a, b);
  }
}

function setup() {
  button = createButton('Solve')
  button.position(170, 300)
  background("yellow");
  strokeWeight('30')
  stroke('black')
  line(133,0,133,400)
  for (let i = 0; i < 81; i++) {
    x[i] = new boxes(x[i], i);
    let col=floor(i/9)
    let row=i%9
    y[row][col]=0
  } //for i
  createCanvas(400, 400);
  //x[8].sel.position(300, 300);
  for (let i = 1; i < 10; i++) {
    //x[8].sel.option(i);
  }
  //for (let i = 1; i <= 9; i++) {
    outputSections();//(i);
  //}
}

function disable (value, row,col) {
  console.log("row = "+row)
  let rowStartSpot=row*9
  for (let i=0; i<9;i++) {
    //do col first
    //let temp=value.toString()
    if (i!=row) {
      x[col+i*9].sel.disable(value)
    }//if
  }//for i
  
    for (let j=0; j<9;j++){
      
    //do row
    //let temp=value.toString()
      if (j!=col){
      x[rowStartSpot+j].sel.disable(value)
    }//if
  }//for j
  
  
  if (row >= 0 && row <= 2) {
    if (col >= 0 && col <= 2) {
      x[0].sel.disable(value)
      x[1].sel.disable(value)
      x[2].sel.disable(value)
      x[9].sel.disable(value)
      x[10].sel.disable(value)
      x[11].sel.disable(value)
      x[18].sel.disable(value)
      x[19].sel.disable(value)
      x[20].sel.disable(value)
     }
    else if (col >= 3 && col <= 5) {
      x[3].sel.disable(value)
      x[4].sel.disable(value)
      x[5].sel.disable(value)
      x[12].sel.disable(value)
      x[13].sel.disable(value)
      x[14].sel.disable(value)
      x[21].sel.disable(value)
      x[22].sel.disable(value)
      x[23].sel.disable(value)
    }
    else if (col >= 6 && col <= 8) {
      x[6].sel.disable(value)
      x[7].sel.disable(value)
      x[8].sel.disable(value)
      x[15].sel.disable(value)
      x[16].sel.disable(value)
      x[17].sel.disable(value)
      x[24].sel.disable(value)
      x[25].sel.disable(value)
      x[26].sel.disable(value)
    } // end of inner else if
  
  }
  else if (row >= 3 && row <= 5) {
    if (col >= 0 && col <= 2) {
      x[27].sel.disable(value)
      x[28].sel.disable(value)
      x[29].sel.disable(value)
      x[36].sel.disable(value)
      x[37].sel.disable(value)
      x[38].sel.disable(value)
      x[45].sel.disable(value)
      x[46].sel.disable(value)
      x[47].sel.disable(value)
    }
    else if (col >= 3 && col <= 5) {
      x[30].sel.disable(value)
      x[31].sel.disable(value)
      x[32].sel.disable(value)
      x[39].sel.disable(value)
      x[40].sel.disable(value)
      x[41].sel.disable(value)
      x[48].sel.disable(value)
      x[49].sel.disable(value)
      x[50].sel.disable(value)
    }
    else if (col >= 6 && col <= 8) {
      x[33].sel.disable(value)
      x[34].sel.disable(value)
      x[35].sel.disable(value)
      x[42].sel.disable(value)
      x[43].sel.disable(value)
      x[44].sel.disable(value)
      x[51].sel.disable(value)
      x[52].sel.disable(value)
      x[53].sel.disable(value)
    }
  }

  else if (row >= 6 && row <= 8) {
    if (col >= 0 && col <= 2) {
      x[54].sel.disable(value)
      x[55].sel.disable(value)
      x[56].sel.disable(value)
      x[63].sel.disable(value)
      x[64].sel.disable(value)
      x[65].sel.disable(value)
      x[72].sel.disable(value)
      x[73].sel.disable(value)
      x[74].sel.disable(value)
    }
    else if (col >= 3 && col <= 5) {
      x[57].sel.disable(value)
      x[58].sel.disable(value)
      x[59].sel.disable(value)
      x[66].sel.disable(value)
      x[67].sel.disable(value)
      x[68].sel.disable(value)
      x[75].sel.disable(value)
      x[76].sel.disable(value)
      x[77].sel.disable(value)
    }
    else if (col >= 6 && col <= 8) {
      x[60].sel.disable(value)
      x[61].sel.disable(value)
      x[62].sel.disable(value)
      x[69].sel.disable(value)
      x[70].sel.disable(value)
      x[71].sel.disable(value)
      x[78].sel.disable(value)
      x[79].sel.disable(value)
      x[80].sel.disable(value)
    }
  }
  
  x[row*9 + col].sel.selected(value)
  
  
}//disable


function enable (value, row,col) {
  console.log("row = "+row)
  let rowStartSpot=row*9
  for (let i=0; i<9;i++) {
    //do col first
    //let temp=value.toString()
    if (i!=row) {
      x[col+i*9].sel.enable(value)
    }//if
  }//for i
  
    for (let j=0; j<9;j++){
    //do row
    //let temp=value.toString()
      if (j!=col){
      x[rowStartSpot+j].sel.enable(value)
    }//if
  }//for j
  
  
  if (row >= 0 && row <= 2) {
    if (col >= 0 && col <= 2) {
      x[0].sel.enable(value)
      x[1].sel.enable(value)
      x[2].sel.enable(value)
      x[9].sel.enable(value)
      x[10].sel.enable(value)
      x[11].sel.enable(value)
      x[18].sel.enable(value)
      x[19].sel.enable(value)
      x[20].sel.enable(value)
     }
    else if (col >= 3 && col <= 5) {
      x[3].sel.enable(value)
      x[4].sel.enable(value)
      x[5].sel.enable(value)
      x[12].sel.enable(value)
      x[13].sel.enable(value)
      x[14].sel.enable(value)
      x[21].sel.enable(value)
      x[22].sel.enable(value)
      x[23].sel.enable(value)
    }
    else if (col >= 6 && col <= 8) {
      x[6].sel.enable(value)
      x[7].sel.enable(value)
      x[8].sel.enable(value)
      x[15].sel.enable(value)
      x[16].sel.enable(value)
      x[17].sel.enable(value)
      x[24].sel.enable(value)
      x[25].sel.enable(value)
      x[26].sel.enable(value)
    } // end of inner else if
  
  }
  else if (row >= 3 && row <= 5) {
    if (col >= 0 && col <= 2) {
      x[27].sel.enable(value)
      x[28].sel.enable(value)
      x[29].sel.enable(value)
      x[36].sel.enable(value)
      x[37].sel.enable(value)
      x[38].sel.enable(value)
      x[45].sel.enable(value)
      x[46].sel.enable(value)
      x[47].sel.enable(value)
    }
    else if (col >= 3 && col <= 5) {
      x[30].sel.enable(value)
      x[31].sel.enable(value)
      x[32].sel.enable(value)
      x[39].sel.enable(value)
      x[40].sel.enable(value)
      x[41].sel.enable(value)
      x[48].sel.enable(value)
      x[49].sel.enable(value)
      x[50].sel.enable(value)
    }
    else if (col >= 6 && col <= 8) {
      x[33].sel.enable(value)
      x[34].sel.enable(value)
      x[35].sel.enable(value)
      x[42].sel.enable(value)
      x[43].sel.enable(value)
      x[44].sel.enable(value)
      x[51].sel.enable(value)
      x[52].sel.enable(value)
      x[53].sel.enable(value)
    }
  }

  else if (row >= 6 && row <= 8) {
    if (col >= 0 && col <= 2) {
      x[54].sel.enable(value)
      x[55].sel.enable(value)
      x[56].sel.enable(value)
      x[63].sel.enable(value)
      x[64].sel.enable(value)
      x[65].sel.enable(value)
      x[72].sel.enable(value)
      x[73].sel.enable(value)
      x[74].sel.enable(value)
    }
    else if (col >= 3 && col <= 5) {
      x[57].sel.enable(value)
      x[58].sel.enable(value)
      x[59].sel.enable(value)
      x[66].sel.enable(value)
      x[67].sel.enable(value)
      x[68].sel.enable(value)
      x[75].sel.enable(value)
      x[76].sel.enable(value)
      x[77].sel.enable(value)
    }
    else if (col >= 6 && col <= 8) {
      x[60].sel.enable(value)
      x[61].sel.enable(value)
      x[62].sel.ebable(value)
      x[69].sel.enable(value)
      x[70].sel.enable(value)
      x[71].sel.enable(value)
      x[78].sel.enable(value)
      x[79].sel.enable(value)
      x[80].sel.enable(value)
    }
  }
  
  //x[row*9 + col].sel.selected(value)
  
  
}//enable


function consoleOutput(x) {
 for (var i = 0; i < 9; i++) {
 print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " "
      + x[i][3] + " " + x[i][4] + " " + x[i][5] + " "
      + x[i][6] + " " + x[i][7] + " " + x[i][8] + " ");
 } //endfor
} //consoleoutput

function outputSections() {

  for (let i=0; i<81; i++){
    a = 20 + 35 * (i % 3) + (floor((i%9)/3)) * 120;
    b = 10 + floor(i / 9) * 30;
    x[i].sel.position(a,b)
    for (let k = 0; k < 10; k++) {
      x[i].sel.option(k);
    }//for k
  }//for i
}
function checkSelected() {
  let row=floor((this.val/9))
  let col=(this.val)%9
  //console.log("checkRow = "+row+"    checkCol = "+col+"   this.val = "+this.val)
  //console.log('Value selected is ' + this.selected());
  oldValue = y[row][col] 
  y[row][col]=this.selected();
  
  console.log("oldValue is = " + oldValue)
  console.log("newValue is = " + y[row][col])
  
  if (oldValue != 0) 
    enable(oldValue, row,col)

  disable(y[row][col],row,col)
  
  //console.table(y)
  consoleOutput(y) 
  //console.log('*'+x[row*9+col].sel.option(this.val))
  //console.log('**'+x[row*9+col-1].sel.option('7'))
  
  
}

function draw() {
   background(220);
   stroke('black')
  line(0,95,400,95)
  line(0,185,400,185)
  line(133, 0, 133, 280)
  line(250, 0, 250, 280)

}
