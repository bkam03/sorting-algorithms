
function insertionSort ( array ){
  var numberHolder = null;
  var currentIndex = 0;
  var isSwapping = null;

  for( var i = 1; i < array.length; i++ ){
    currentIndex = i;
    do{
      isSwapping = false;

      if( array[ currentIndex ] < array[ currentIndex - 1 ] ){
        numberHolder = array[ currentIndex ];
        array[ currentIndex ] = array[ currentIndex - 1 ];
        array[ currentIndex - 1 ] = numberHolder;
        isSwapping = true;
      }
      currentIndex--;
    } while( isSwapping && currentIndex > 0 );
  }

  return array;
}

var array = [ 23, 64, 91, 8, 17, 4, 81, 44 ];
var sorted = insertionSort( array );
//console.log( sorted );