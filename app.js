const fs=require('fs');
const os=require('os');
const notes = require('./notes.js');

const _ = require('lodash');
const yargs = require('yargs');

var user=os.userInfo();
var u;
//console.log(user);

// var res = notes.addNote();
// console.log(res);

//fs.appendFileSync('greetings.txt','Hello World!');
//fs.appendFileSync('greetings.txt','Hello'+user.username+'!');

// fs.appendFileSync('greetings.txt',`hello ${user.username} !, You are ${notes.age}`);  //ES6 feature


// console.log(_.isString('mk'));

// var filteredArray = _.uniq([1,1,1,2,2,43]); //remove duplicate elements from array
// console.log(filteredArray);


//cancel that log to print them to the screen.



// It's on the process object and the property we're looking for is arg.

// The RV is short for arguments of vector or in the case of javascript it's more like an argument array.

// This is going to be an array of all of the command line arguments passed in and we can use them to start

// creating our application.

//console.log(process.argv);
const titleOptions = {
		describe: 'Title of note',
		demand: true,
		alias: 't'
	}


const bodyOptions = {
		describe: 'Body of the note',
		demand: true,
		alias: 'b'
	}

// const argv = yargs
// .command('add','Add a new note',{
// 	title: titleOptions,
// 	body: bodyOptions,
// })
// .command('list','List all notes')
// .command('read','Read a note',{
// 	title: titleOptions,
// })
// .command('remove','Remove a note',{
// 	title: titleOptions,
// 	body: bodyOptions
// })
// .help() 
// .argv;
// console.log(argv);


yargs.command({
	command: 'add',
	describe: 'Add a new note',
	// to specify the options for the command
	builder: {
		title: {
			type: 'string',
			describe: 'Note title',
			demandOptions: true
		},

		body: {
			type: 'string',
			demand: true,
			describe: 'Note body'
		}
	},

	// When yargs run this command, it automatically passes argv
	handler: function (argv) {
		notes.addNote(argv.title, argv.body)
	}
})

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			demand: true,
			describe: 'Title of the note to be removed',
		}
	},
	handler: function(argv) {
		notes.removeNote(argv.title)
	}
})

yargs.command({
	command: 'List',
	describe: 'List all notes',
	handler: function () {
		notes.getAll()
	}
})

// Parse the 
yargs.parse()
// var command = argv._[0];
// console.log(command);



// if(command === 'add')
// {
// 	var note = notes.addNote(argv.title,argv.body);

// 	if (note == undefined){
// 		console.log("A note with same title already exists");
// 	}
// 	else{
// 	 	console.log('Note created');
// 	 	notes.logNote(note);
// 	}
	
// }
// else if(command === 'list')
// {
// 	var allNotes = notes.getAll();
// 	console.log(`Printing ${allNotes.length} note(s)`);
// 	allNotes.forEach((note) => {
// 		notes.logNote(note);
// 	})

// }
// else if(command === 'read')
// {
// 	var note = notes.getNote(argv.title);

// 	if(note)
// 	{
// 		console.log("Note found");
// 		notes.logNote(note);
// 	}
// 	else
// 	{
// 		console.log("Note not found");
// 	}
// }
// else if(command === 'remove')
// {
// 	var noteRemoved = notes.removeNote(argv.title);
// 	var message = noteRemoved ? 'Note was removed': 'Note not found';
// 	console.log(message);
// }
// else
// {
// 	console.log("Command not found");
// }


