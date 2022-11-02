const sleepTime = 2000;

setTimeout(() => {
document.body.style.backgroundColor="black";
console.log("setTimeout fired");
}, sleepTime);

console.log(`I am in the code after the timeout

setTimeout() is ASYNCHRONOUS, while it sleeps other commands are fulfilled
`);
