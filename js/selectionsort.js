function selectionSort ( array ){
  var currentMinimum = 0;
  var currentMinimumPosition = 0;

  var numberHolder = null;

  for( var passNumber = 0; passNumber < array.length - 1; passNumber++ ){
    currentMinimum = array[ passNumber ];
    currentMinimumPosition = passNumber;

    for( var index = passNumber + 1; index < array.length; index++ ){
      if( array[ index ] < currentMinimum ){
        currentMinimum = array[ index ];
        currentMinimumPosition = index;
      }
    }
    if( currentMinimumPosition > passNumber ){
      numberHolder = array[ passNumber ];
      array[ passNumber ] = currentMinimum;
      array[ currentMinimumPosition ] = numberHolder;
    }
  }

  return array;

}

var array = [19, 97, 76, 98, 35, 29, 71, 27, 65, 86 ];

var sorted = selectionSort( array );
// console.log( sorted );