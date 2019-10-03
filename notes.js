// console.log("Starting notes.js");
//console.log(module);  


// module.exports.age=20;

// module.exports.addNote = () => {
// 	console.log('addNote');
// 	return 'New Note';
// }

const fs = require('fs');
const chalk = require('chalk')


var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e){
		return [];
	}

}

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title,body) => {
	var notes = fetchNotes();
	var note = {
		title,  //title:title
		body
	};

	// function in filter function gets called once for every note
	var duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	if(duplicateNotes.length == 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}


}

module.exports.add = (a,b) => {
	return a+b;
}

var getAll = () => {
	var notes = fetchNotes();
	return notes;
	console.log("Getting all notes");
}

var getNote = (title) => {
	var notes = fetchNotes();
	var filteredNote = notes.filter((note) => note.title === title);
	return filteredNote[0];

	console.log("Getting Note : ",title);
}

var removeNote = (title) => {
	var notes = fetchNotes();

	var filteredNotes = notes.filter((note) => note.title != title)


	if (notes.length > filteredNotes.length) {
		console.log(chalk.bgGreen('Note Removed!'))
		saveNotes(filteredNotes);
	}
	else {
		console.log(chalk.red.inverse('No Note Found!'))
	}
	return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
	debugger;
	console.log("-----")
	console.log("Title : ",note.title);
	console.log("Body : ",note.body);
}

module.exports = {  //creting an exports object
	addNote : addNote, // this is identical to addNote that is if we have same name for propery and variable we can write it as that ES6syntax
	getAll,
	getNote,
	removeNote,
	logNote,
}
//module is a variable .....This is pretty much the only useful one here. Exports is fantastic. It's an object on the module property and everything on this object.

// It's an object on the module property and everything on this object.

// This gets exported this object gets set as the variable right here.

// Notice that means we can set properties on it and those will get set on notes and we can use them inside

// of apps.


