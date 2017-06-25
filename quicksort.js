/*
base case: array size < 2
find pivot, position 0.
split array into two, on either side of pivot.
  iterate through array( except 0 ) and push into greater or lesser array.
changing call: return quicksort( small array ) + pivot + quicksort( larger array )
*/

function quickSort ( array ){
  if( array.length < 2 ){
    return array;
  }
  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  var currentNumber = null;

  for( var i = 1; i < array.length; i++ ) {
    currentNumber = array[ i ];
    ( currentNumber < pivot ) ? lesserArray.push( currentNumber ) : greaterArray.push( currentNumber );
  }
  return quickSort( lesserArray ).concat( pivot, quickSort( greaterArray ) );

}

var array = [ 48, 42, 87, 4, 86,40, 37, 60, 96, 10 ];
var sorted = quickSort( array );
console.log( sorted );