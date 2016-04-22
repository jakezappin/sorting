xdescribe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
});

describe('Merge Sort', function(){
  it('handles an unsorted array', function(){
    expect( mergeSort([2,10,8,6,3,7,5]) ).toEqual( [2,3,5,6,7,8,10] );
  });
});

xdescribe('Merge Sort', function(){
  it('handles an array with one element', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });
});

xdescribe('Merge Sort', function(){
  it('handles an array with strings', function(){
    expect( mergeSort(["hello", "goodbye", "seeya"]) ).toEqual( ["goodbye", "hello", "seeya"] );
  });
});