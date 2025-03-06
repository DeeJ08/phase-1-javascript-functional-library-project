const myEach = (collection, callback) => {
    const array = Array.isArray(collection) ? collection : Object.values(collection);

    array.forEach((item, index) => {
        callback(item, index, collection);
    });
    return collection;
};

function myMap(collection, callback) {
    const newArray = Array.isArray(collection) ? collection : Object.values(collection);
    const arra = newArray.map(element => callback(element));

    return arra;
};

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : values[0];
    let startIndex = acc !== undefined ? 0 : 1;

    for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
    }

    return accumulator;
};

function myFind(collection, predicate) {
    const verify = Array.isArray(collection) ? collection : Object.values(collection);
    for (let index = 0; index < verify.length; index++) {
        const element = verify[index];
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
};

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
        return collection.filter(element => predicate(element));
    } else {
        return Object.values(collection).filter(element => predicate(element));
    }
};

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.values(collection).length;
    }
    return 0;
};

function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n)
    }
};

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n)
    }
};

function myKeys(obj) {
    return Object.keys(obj)
};

function myValues(obj) {
    return Object.values(obj)
}