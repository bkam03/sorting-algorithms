/*
  divide array until it ends in pairs or singles
  base case: array.length <= 2
    if so sort
  otherwise divide in half again
    two arrays, each holding half the original.

  then recombine these partial arrays.

  recombine arrays
    compare the two arrays being merged.  look at front of each.
    four cases
      both arrays full.  compare front
      one array is empty.  other concats by default
      other array is empty.  same.
      both arrays empty.  return.
    actual comparison cases
      both positions undefined  do nothing, loop will next cycle
      array1 undefined          concat array2 to sortedArray
      array2 undefined          concat array1 to sortedArray
      array1 greater            push array1 to sortedArray
      array2 greater            push array2 to sortedArray
      array1 == array2          push array1 to sortedArray

*/

function mergeSort( array ){
  if( array.length <= 2 ){
    console.log( 'endpoint', array );
    return array;
  } else{
    var splitArrayHere = Math.floor( array.length / 2 );
    var array1 = array.slice( 0, splitArrayHere );
    var array2 = array.slice( splitArrayHere );

    console.log( 'split', array1, array2 );

    return sortArray( mergeSort( array1), mergeSort( array2 ) );
  }
}

function sortArray( array1, array2 ){
  var sortedArray = [];
  var array1Position = 0;
  var array2Position = 0;
  var array1Length = array1.length;
  var array2Length = array2.length;
  console.log( 'sort start' );

  while( array1Position < array1Length || array2Position < array2Length ){
    switch( true ){
      case ( array2[ array2Position ] > array1[ array1Position ] ):
        sortedArray.push( array2[ array2Position ] );
        array2Position++;
        console.log( 'array2Greater', array2[ array2Position ] );
        break;
      case ( array1[ array1Position ] > array2[ array2Position ] ):
        console.log( 'array1Greater', array1[ array1Position ] );
      case ( array1[ array1Position ] === array2[ array2Position ] ):
        sortedArray.push( array1[ array1Position ] );
        array1Position++;
        console.log( 'arrays match' );
        break;
      default:
        break;
    }
  }
  if( array1Position >= array1Length ){
      sortedArray.concat( array2.slice( array2Position ) );
      console.log( 'concat array2' );
  } else if( array2Position >= array2Length ){
    sortedArray.concat( array1.slice( array1Position ) );
    console.log( 'concat array1' );
  }
  console.log( 'sortedarray end', sortedArray );
  return sortedArray;
}




var array = [ 62, 62, 70, 35, 47, 11, 67, 18, 54, 1 ];
var sorted = mergeSort( array );
console.log( sorted );