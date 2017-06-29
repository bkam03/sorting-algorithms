
function mergeSort( array ){
  if( array.length <= 1 ){
    return array;
  } else{
    var splitArrayHere = Math.floor( array.length / 2 );
    var array1 = array.slice( 0, splitArrayHere );
    var array2 = array.slice( splitArrayHere );

    return sortArray( mergeSort( array1), mergeSort( array2 ) );
  }
}

function sortArray( array1, array2 ){
  var sortedArray = [];

  while(  array1.length > 0 || array2.length > 0 ){
    switch( true ){
      case ( array1[ 0 ] === array2[ 0 ] ):
      case ( array1[ 0 ] < array2[ 0 ] ):
      case ( array2[ 0 ] == null ):
        sortedArray.push( array1.shift() );
        break;
      case ( array1[ 0 ] > array2[ 0 ] ):
      case ( array1[ 0 ] == null ):
        sortedArray.push( array2.shift() );
        break;
      default:
        break;
    }
  }

  return sortedArray;
}




var array = [ 62, 62, 70, 35, 47, 11, 67, 18, 54, 1 ];
var sorted = mergeSort( array );
console.log( sorted );