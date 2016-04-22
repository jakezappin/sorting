describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles an unsorted array', function(){
    expect( bubbleSort([2,10,8,3,7,5]) ).toEqual( [2,3,5,7,8,10] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array with one element', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array with strings', function(){
    expect( bubbleSort(["hello", "goodbye", "seeya"]) ).toEqual( ["goodbye", "hello", "seeya"] );
  });
});