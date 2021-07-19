var request = {
	type: 'POST',
	url: 'apple.php',
	data: {
		name: 'peter',
		id: 188
	}
}

console.log(request.data.name); // peter
console.log(request.data.id); // 188
console.log(request.data); // Object {name: "peter", id = 188}

console.log(typeof request); // object
console.log(typeof request.type); // string
console.log(typeof request.data); // object