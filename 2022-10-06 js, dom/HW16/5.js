// 5. Return BOOLEAN (without IF ELSE)

//    Create canVote() funtion such that it returns true when 
//    the user can vote and false otherwise. 
  
//    The age for voting is at least 18 (18 is included).
 
//    Create new array goVote.
//    Go over the given array of the ages and for each age add
//    to the array goVote true or false.

//    const ages = [18, 18, 21, 30, 119, 66, 0.5, 12, 19, 45, 78, 4.5]
//    The output should be:

//    console.log(goVote);
   // true, true, true, true, true, true, false, false, true, true, true, false

   const ages = [18, 18, 21, 30, 119, 66, 0.5, 12, 19, 45, 78, 4.5]
   function canVote() {
    const goVote = [];
    for (i = 0; i < ages.length; i++) {
        goVote.push(ages[i] >= 18);
    }
    console.log(goVote);
   }
 canVote();