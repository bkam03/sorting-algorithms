
function insertionSort ( array ){
  /*
  iterate through the array once.( you need to check each index only once.)
    at each index, check if index is lower than the one before it.
      if so, swap these two numbers.
    move back a position and repeat.
  */
  var numberHolder = null;
  var currentIndex = 0;
  var isSwapping = null;

  for( var i = 1; i < array.length; i++ ){
    currentIndex = i;
    console.log( 'currentIndex', currentIndex );
    do{
      console.log( 'loop executing' );
      isSwapping = false;
      console.log( array[ currentIndex ], array[ currentIndex - 1 ] );
      if( array[ currentIndex ] < array[ currentIndex - 1 ] ){
        console.log( 'swapping', array[ currentIndex ], array[ currentIndex - 1 ]);
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
console.log( sorted );