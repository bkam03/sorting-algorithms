var expect = chai.expect;  //this is so you dont have to say chai.expect each time.
var should = chai.should();

var reverseArray = [];
var emptyArray = [];
var mixArray = [];
var binaryArray = [];
var singleArray = [];

describe( 'Bubble Sort', function(){
  beforeEach( function(){
    reverseArray = [ 5, 4, 3, 2, 1 ];
    emptyArray = [];
    mixArray = [ 7, 65, 23, 1, 19 ];
    binaryArray = [ 1, 0 ];
    singleArray = [ 5 ];

  } );

  it("should be a function", function() {
    console.log( mixArray );
    expect( bubbleSort ).to.be.a("function");
  });

  it( 'should sort a reverse array', function(){
      var test1 = bubbleSort( reverseArray );
      expect( test1 ).to.deep.equal( [ 1, 2, 3, 4, 5 ] );
  });

  it( 'should sort a mixed array', function(){
      var test1 = bubbleSort( mixArray );
      expect( test1 ).to.deep.equal( [ 1, 7, 19, 23, 65 ] );
  });

  it( 'should sort a binary array', function(){
    var test1 = bubbleSort( binaryArray );
    expect( test1 ).to.deep.equal( [ 0, 1 ] );
  });

  it( 'should sort a single element array', function(){
    var test = bubbleSort( singleArray );
    expect( test ).to.deep.equal( [ 5 ] );
  } );
} );

describe( 'Insertion Sort', function(){
  beforeEach( function(){
    reverseArray = [ 5, 4, 3, 2, 1 ];
    emptyArray = [];
    mixArray = [ 7, 65, 23, 1, 19 ];
    binaryArray = [ 1, 0 ];
    singleArray = [ 5 ];

  } );

  it("should be a function", function() {
    expect( insertionSort ).to.be.a("function");
  });

  it( 'should sort a reverse array', function(){
      var test1 = insertionSort( reverseArray );
      expect( test1 ).to.deep.equal( [ 1, 2, 3, 4, 5 ] );
  });

  it( 'should sort a mixed array', function(){
      var test1 = insertionSort( mixArray );
      expect( test1 ).to.deep.equal( [ 1, 7, 19, 23, 65 ] );
  });

  it( 'should sort a binary array', function(){
    var test1 = insertionSort( binaryArray );
    expect( test1 ).to.deep.equal( [ 0, 1 ] );
  });
  it( 'should sort a single element array', function(){
    var test = insertionSort( singleArray );
    expect( test ).to.deep.equal( [ 5 ] );
  } );

} );

describe( 'Merge Sort', function(){
  beforeEach( function(){
    reverseArray = [ 5, 4, 3, 2, 1 ];
    emptyArray = [];
    mixArray = [ 7, 65, 23, 1, 19 ];
    binaryArray = [ 1, 0 ];
    singleArray = [ 5 ];

  } );

  it("should be a function", function() {
    expect( mergeSort ).to.be.a("function");
  });

  it( 'should sort a reverse array', function(){
      var test1 = mergeSort( reverseArray );
      expect( test1 ).to.deep.equal( [ 1, 2, 3, 4, 5 ] );
  });

  it( 'should sort a mixed array', function(){
      var test1 = mergeSort( mixArray );
      expect( test1 ).to.deep.equal( [ 1, 7, 19, 23, 65 ] );
  });

  it( 'should sort a binary array', function(){
    var test1 = mergeSort( binaryArray );
    expect( test1 ).to.deep.equal( [ 0, 1 ] );
  });

  it( 'should sort a single element array', function(){
    var test = mergeSort( singleArray );
    expect( test ).to.deep.equal( [ 5 ] );
  } );

} );

describe( 'Quick Sort', function(){
  beforeEach( function(){
    reverseArray = [ 5, 4, 3, 2, 1 ];
    emptyArray = [];
    mixArray = [ 7, 65, 23, 1, 19 ];
    binaryArray = [ 1, 0 ];
    singleArray = [ 5 ];

  } );

  it("should be a function", function() {
    expect( quickSort ).to.be.a("function");
  });

  it( 'should sort a reverse array', function(){
      var test1 = quickSort( reverseArray );
      expect( test1 ).to.deep.equal( [ 1, 2, 3, 4, 5 ] );
  });

  it( 'should sort a mixed array', function(){
      var test1 = quickSort( mixArray );
      expect( test1 ).to.deep.equal( [ 1, 7, 19, 23, 65 ] );
  });

  it( 'should sort a binary array', function(){
    var test1 = quickSort( binaryArray );
    expect( test1 ).to.deep.equal( [ 0, 1 ] );
  });

  it( 'should sort a single element array', function(){
    var test = quickSort( singleArray );
    expect( test ).to.deep.equal( [ 5 ] );
  } );

} );

describe( 'Selection Sort', function(){
  beforeEach( function(){
    reverseArray = [ 5, 4, 3, 2, 1 ];
    emptyArray = [];
    mixArray = [ 7, 65, 23, 1, 19 ];
    binaryArray = [ 1, 0 ];
    singleArray = [ 5 ];

  } );

  it("should be a function", function() {
    expect( selectionSort ).to.be.a("function");
  });

  it( 'should sort a reverse array', function(){
      var test1 = selectionSort( reverseArray );
      expect( test1 ).to.deep.equal( [ 1, 2, 3, 4, 5 ] );
  });

  it( 'should sort a mixed array', function(){
      var test1 = selectionSort( mixArray );
      expect( test1 ).to.deep.equal( [ 1, 7, 19, 23, 65 ] );
  });

  it( 'should sort a binary array', function(){
    var test1 = selectionSort( binaryArray );
    expect( test1 ).to.deep.equal( [ 0, 1 ] );
  });

  it( 'should sort a single element array', function(){
    var test = selectionSort( singleArray );
    expect( test ).to.deep.equal( [ 5 ] );
  } );

} );