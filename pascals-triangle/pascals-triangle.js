//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(x) {
        var a = [];
        var i;
        var j;
        if(x>=1){
            a[0] = [1];
        }
        if(x>=2){
            a[1] = [1,1];
        }
   
        for(i=2 ; i<x ; i++){
            a[i] = [1];
            for(j=1 ; j<i ; j++){
                a[i][j] = a[i-1][j-1] + a[i-1][j];
            }
            a[i][j] = 1;
        }

      this.pt = a;
  }

  get lastRow() {
      return this.rows[this.rows.length-1];
  }

  get rows() {
      return this.pt;
  }
}
