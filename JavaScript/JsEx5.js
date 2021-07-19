var aStudent = new Array();

aStudent['name'] = 'Peter';
aStudent['id'] = 12345;
aStudent['gender'] = 'male';

for(key in aStudent) {
	console.log(key + ": " + aStudent[key]);
}

console.log(aStudent.length);
console.log(aStudent instanceof Array);
console.log(typeof aStudent);