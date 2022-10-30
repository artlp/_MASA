// 6. map()
    const numAr1 = [4.5, 64, 1024, 81, 10000, 3.1];
//     a) Create array of square roots of numAr1 

//     b) In the same map() loop create array of square roots of numAr1 and
//        array of squares of numAr1 (for one of them you use map, 
//        for the second - the usual push())

//     c) Create array numAr2 which elements are constructed from
//        the elements of numAr1 minus their index

const numArsqrt = numAr1.map((e,i,ar) => {
    return Math.sqrt(e) })
console.log(numArsqrt);
