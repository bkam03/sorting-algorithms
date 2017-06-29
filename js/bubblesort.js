
function bubbleSort(arr){
  var isSwapping = false;
  var endPosOfUnsortedSectionOfArray = arr.length;
  var valueHolder = null;

  do {
    isSwapping = false;
    for( var i = 1; i < endPosOfUnsortedSectionOfArray; i++ ){
      if( arr[ i ] < arr[ i - 1 ] ){
        valueHolder = arr[ i - 1 ];
        arr[ i - 1 ] = arr[ i ];
        arr[ i ] = valueHolder;
        isSwapping = true;
      }
    }
    endPosOfUnsortedSectionOfArray--;
  } while ( isSwapping );
  console.log( arr );
  return arr;
}

var array = [ 9, 4, 5, 6, 12, 2 ];
var sorted = bubbleSort(array);
//console.log( sorted );

