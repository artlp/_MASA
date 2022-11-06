/* Level 8.5
! NOT DONE
a) Average of averages. Create function avgOfAvg that gets
   array of arrays of numbers.  */
const arr1 = [2, 3.4, -12, 35.3, 14, 15];
const arr2 = [2, 3, -12, 35];
const arr3 = [-1, 1, -5, 5];
const arr4 = [77, 77, 77, 77, 77, 77];
const arrOfArrs = [arr1, arr2, arr3, arr4];

/*    Use forEach inside forEach loop to make this function 
   to find average of averages of all the numbers  */
let sum = 0;
let sum2 = 0;
let avg = 0;
arrOfArrs.forEach((e) => {
        e.forEach((x,i,arr) => {
            return sum += x;
        })
        sum2 += sum;
    });
    console.log(sum2);

/*    b) New array of sums. Create function creArrOfSums - it
   should use map() to create the new array arrOfSums 
   which will contain sums of each array inside arrOfArrs. */