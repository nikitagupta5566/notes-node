// var obj = {
// 	name : 'Nikita'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Nikita","age":19}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some Body',
}

originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);