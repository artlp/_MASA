console.log(`arrays.js loaded`);
/*************************************
 * 
 *              str.substring(start, length) - cuts a substring with 
 *                            a given length, starting from "start"
 * 
 *              str.substring(start) - cuts a substring from "start"
 *                                     till the end
 * 
 ************************************/

let strin = 'synCHroPHasotRon';

// MISSION: put into str2 part of str , that starts at the 1st letter(Human)
//  and has length of 7.
//      Put into str3 part of str from the 8th letter (human)
//       and till the end
    let strin2 = strin.substring(0, 7);
    let strin3 = strin.substring(7);
    console.log(strin, strin2, strin3);