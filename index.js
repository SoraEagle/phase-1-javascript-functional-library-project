/*
myEach(collection, callback)
    Return Value:
        Original collection
    Behavior:
        Iterates over collection of elements, passing each element in turn to the callback function. 
        Returns original collection.

myMap(collection, callback)
    Return Value:
        new array
    Behavior:
        Produces new array of values by mapping each value in collection through transformation function, callback.
        returns new array without modifying original.

myReduce(collection, callback, acc)
    Return Value:
        single value
    Behavior:
        Reduce iterates through collection of values and boils down into single value. 
        acc (short for accumulator) starts at the value that's passed in as an argument, and 
        with each successive step is updated to the return value of callback. 
        If start value isn't passed to myReduce, first value in collection should be used as start value.
        Callback is passed three arguments: current value of acc, current element/value in iteration, 
        and reference to entire collection.

        Hint: For case when a start value for accumulator isn't passed in as argument, 
        think about how you'll need to adjust your function to account for fact that first
        element of collection has already been accounted for.

myFind(collection, predicate)
    Return Value:
        Single value
    Behavior:
        Looks through each value in collection, retunring the first one that passes truth test (predicate)
        or undefined if no value passes test.  Function returns as soon as it finds acceptable element.

myFilter(collection, predicate)
    Return Value:
        An array
    Behavior:
        Looks through each value in collection, returning array of all elements that pass 
        truth test (predicate).  If no matching values are found, return empty array.

mySize(collection)
    Return Value:
        Integer
    Behavior:
        return number of values in collection.

myLast(array, [n])
    Return Value:
        Single element OR array
    Behavior:
        Returns last element of array.
        Passing n returns last n elements of array.
*/

function standardizeCollection(collection){ //Create function to check for Array or Object
    if(Array.isArray(collection)){
        return collection; //It is an Array, return as Array.
    }
    else{
        return Object.values(collection); //False, change Object into an Array.
    }
}

function myEach(collection, callback){
    let array = standardizeCollection(collection);
    callback = () => {
        for(const val of array){
            val === val;
        }
    }
    return array;
}

function myMap(collection, callback){
    let array = standardizeCollection(collection);
    callback = (x) => x = x * 3;
    return array.map(callback);
}

function myReduce(collection, callback, acc){
    callback = (acc, val, collection) => { //Arguements: acc, current element/value in iteration, and reference to entire collection
        let array = standardizeCollection(collection); //Convert any Object into Array for .reduce.
        let startVal = 0; //Inital starting value for .reduce method.
        //
        return array.reduce();
    }
    //return
}

function myFind(collection, predicate){
    let array = standardizeCollection(collection);

    predicate = () => {
        //
    }
    //return val;
}

function myFilter(collection, predicate){
    let array = standardizeCollection(collection);

    predicate = () => {
        //
    }
    // return arr;
}

function mySize(collection){
    let array = standardizeCollection(collection);
    return array.length;
}

function myFirst(arr, n){
    if(n === undefined) return arr[0];
    else{
        return arr.slice(0, n);
    }
}

function myLast(arr, n){
    if(n === undefined) return arr[arr.length - 1];
    else{
        return arr.slice(arr.length - n, arr.length);
    }
}

function myKeys(object){
    let arr = [];
    
    for(const key in object){
        arr.push(key);
    }
    return arr;
}

function myValues(object){
    //Use for of loop to push value into an Array
    let arr = [];

    for(const key in object){
        arr.push(object[key]);
    }
    return arr;
}