// Level 7.7 а) Напишите функцию makeInitials(), кот. получает имя 
//       и фамилию, напр. "jennifer", "lopez", берет от них первые буквы, переводит в верхний регистр и ставит после каждой буквы точку. Для "jennifer", "lopez" output "J.L."
//    b) Запустите эту функцию для нескольких пар параметров:
//       "jennifer", "lopez"
//       "mike","Myers"
//       "Antony","hopkins"
//       Output:
//        "J.L."
//        "M.M."
//        "A.H."
//    c) Напишите функцию addTitle(), кот. получает имя, фамилию 
//       и обращение и запускает функцию makeInitials() так, чтобы получилoсь обращение вроде "Ms J.L."
//    d) Запустите функцию addTitle() для следующих троек 
//       параметров:
//       "jennifer", "lopez", "Ms"
//       "mike","Myers", "Mr"
//       "Julia","Roberts","Ms"
//       "Antony","hopkins", "Mr"
//       Output:
//        "Ms J.L."
//        "Mr M.M."
//        "Ms J.R."
//        "Mr A.H."

//    е) Даны 3 массива:
//       const firstNames1 = ["jennifer","mike","alec","Julia","Antony","Judy"]
//       const lastNames1 = ["lopez","Myers","Boldwin","Roberts","hopkins","Foster"]
//       const titles1 = ["Ms","Mr","Mr","Ms","Mr","Ms"]
//       Пройдите по всем трем массивам при помощи одного общего цикла for и запустите функцию addTitle(), используя на каждом шаге цикла, соответствующие по индексу имя, фамилию и обращение
//       Output:
//        "Ms J.L."
//        "Mr M.M."
//        "Mr A.B."
//        "Ms J.R."
//        "Mr A.H."
//        "Ms J.F."

//    f) Даны 3 массива:
//       const firstNames1 = ["jennifer","mike","alec","Julia","Antony","Judy"]
//       const lastNames1 = ["lopez","Myers","Boldwin","Roberts","hopkins","Foster"]
//       const titles1 = ["Ms","Mr","Mr","Ms","Mr","Ms"]

//       Пройдите по одному из массивов припомощи forEach, используйте индекс, чтобы одновременно в том же цикле обратиться к соответствующим элементам двух других массивов и запустите функцию addTitle()
//       Output:
//        "Ms J.L."
//        "Mr M.M."
//        "Mr A.B."
//        "Ms J.R."
//        "Mr A.H."
//        "Ms J.F."

//    g) Даны 3 массива:
//       const firstNames1 = ["jennifer","mike","alec","Julia","Antony","Judy"]
//       const lastNames1 = ["lopez","Myers","Boldwin","Roberts","hopkins","Foster"]
//       const titles1 = ["Ms","Mr","Mr","Ms","Mr","Ms"]

console.log("~~~7.7 A~~~");
function makeInitials(name, surname) {
    return `${name.charAt(0).toUpperCase()}. ${surname.charAt(0).toUpperCase()}.`;
};
console.log(makeInitials("artur", "lipskii"));

console.log("~~~7.7 B~~~");
console.log(makeInitials("jennifer", "lopez"));
console.log(makeInitials("mike", "Myers"));
console.log(makeInitials("Antony", "hopkins"));

console.log("~~~7.7 C~~~");
function addTitle(title, name, surname) {
    console.log(`${title} ${makeInitials(name, surname)}`);
}
addTitle("Sir", "artur", "lipskii");

console.log("~~~7.7 D~~~");
addTitle("Ms", "jennifer", "lopez");
addTitle("Mr", "mike", "Myers");
addTitle("Ms", "Julia", "Roberts");
addTitle("Mr", "Antony", "hopkins");

console.log("~~~7.7 E~~~");
const firstNames1 = ["jennifer", "mike", "alec", "Julia", "Antony", "Judy"];
const lastNames1 = ["lopez", "Myers", "Boldwin", "Roberts", "hopkins", "Foster"];
const titles1 = ["Ms", "Mr", "Mr", "Ms", "Mr", "Ms"];
for (i = 0; i < firstNames1.length; i++) {
    addTitle(titles1[i], firstNames1[i], lastNames1[i]);
}
