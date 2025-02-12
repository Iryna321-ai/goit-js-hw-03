function filterArray(numbers, value) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > value) {
            result.push(numbers[i]);
    }
}
return result;
}


filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38); 
filterArray([12, 24, 8, 41, 76], 20); 


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4)); 
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38)); 
console.log(filterArray([12, 24, 8, 41, 76], 20));