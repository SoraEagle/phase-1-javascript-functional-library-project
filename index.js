/*
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
*/

function standardizeCollection(collection){ //Create function to check for Array or Object
    if(Array.isArray(collection)) return collection; //It is an Array, return as Array.
    else return Object.values(collection); //False, change Object into an Array.
}

function myEach(collection, callback){
    let array = standardizeCollection(collection);
    for(const val of array) callback(val);
    return collection;
}

function myMap(collection, callback){
    let array = standardizeCollection(collection);
    let newArray = [];
    for(let index = 0; index < array.length; index++) newArray.push(callback(array[index]));
    return newArray;
}

function myReduce(collection, callback, acc){
        let array = standardizeCollection(collection);
        if(!acc){ 
            acc = array[0]; //Inital starting value (first element) for .reduce method.
            array = array.slice(1);
        }
        let length = array.length;
        
        for(let index = 0; index < length; index++){
            acc = callback(acc, array[index], array); //((val * 3) + acc)
        }
    return acc;
}

function myFind(collection, predicate){
    let array = standardizeCollection(collection);
    let val = undefined;

    for(let index = 0; index < array.length; index++){
        console.log(predicate(array[index]));
        if(predicate(array[index])) return val = array[index];
    }
    return val;
    //myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
}

function myFilter(collection, predicate){
    let array = standardizeCollection(collection);
    let newArray = [];

    for(let index = 0; index < array.length; index++){
        if(predicate(array[index])) newArray.push(array[index]);
    }
    return newArray;
}

function mySize(collection){
    let array = standardizeCollection(collection);
    return array.length;
}

function myFirst(arr, n){
    if(n === undefined) return arr[0];
    else return arr.slice(0, n);
}

function myLast(arr, n){
    if(n === undefined) return arr[arr.length - 1];
    else return arr.slice(arr.length - n, arr.length);
}

function myKeys(object){
    let arr = [];
    
    for(const key in object) arr.push(key);
    return arr;
}

function myValues(object){
    let arr = [];

    for(const key in object) arr.push(object[key]);
    return arr;
}