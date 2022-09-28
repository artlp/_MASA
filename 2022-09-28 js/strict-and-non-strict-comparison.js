let a = 25;
let b = "25";

if (a === b) {  //! strict comparison - compares values AND datatypes
    console.log("strict equal");
} 
if (a == b) { //! non-strict comparison
    console.log("non-strict equal");
}
if (a !== b) { //! strict comparison
    console.log("strict non-equal");
}

if (a != b) { //! non-strict comparison
    console.log("non-strict non-equal");
}
