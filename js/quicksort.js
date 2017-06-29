

function quickSort ( array ){
  if( array.length < 2 ){
    return array;
  }
  var pivot = array.shift();
  var lesserArray = [];
  var greaterArray = [];

  var currentNumber = null;

  for( var i = 0; i < array.length; i++ ) {
    currentNumber = array[ i ];
    ( currentNumber < pivot ) ? lesserArray.push( currentNumber ) : greaterArray.push( currentNumber );
  }
  return quickSort( lesserArray ).concat( pivot, quickSort( greaterArray ) );

}

var array = [ 48, 42, 87, 4, 86,40, 37, 60, 96, 10 ];
var sorted = quickSort( array );
console.log( sorted );