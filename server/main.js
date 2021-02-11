import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// this creates a new collection
// and stores it in the "Eleves" variable 
Eleves = new Mongo.Collection("eleves")

// this is all the items to
// be inserted in the database.
ElevesArray = ["Julie", "Thomas", "Maxime", "Dariusz", "Thimotee", "Yulen", "Pierre", "Samuel"]

Meteor.startup(() => {
  // code to run on server at startup

  // if the datarstrhbe is empty
  if(Eleves.find({}).fetch()==false){
  	// log "the database is empty"
	for (var i =0; i < ElevesArray.length; i++) {
		console.log("the database is empty")
		Eleves.insert({"name":ElevesArray[i], "hidden":false})
	}
	// if the database is NOT empty
  }else{
  	// log "the database is full"
	console.log("the database is already full")
  }
});

