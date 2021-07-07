var now = new Date();

console.log(now);
console.log(now.toString());
console.log(now.valueOf());
console.log('type: ' + typeof now);
console.log(now instanceof Object); // true
console.log(now instanceof Date); // true
console.log(now instanceof Array); // false

var aDay = new Date(1970, 1, 1, 12, 34, 56, 79);

console.log(aDay);
console.log(aDay.toString);
console.log(aDay.valueOf());