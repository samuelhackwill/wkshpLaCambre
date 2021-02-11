import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Eleves = new Mongo.Collection("eleves")

Template.hello.onCreated(function helloOnCreated() {
});

Template.hello.helpers({
// METEOR BLAZE : https://guide.meteor.com/v1.2/blaze

	// this helper returns all the objects from the database
	eleves:function(){
// JS RETURN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
		return Eleves.find({})
	},

	// this helper returns a css opacity value 
	// if the object has a hidden=true parameter
	opacityChanger:function(){
// JS IF : https://www.w3schools.com/js/js_if_else.asp
		if (this.hidden==true) {
			return 0.1
		}else{
			return 1
		}
	}

});

Template.hello.events({
// METEOR EVENTS : http://meteortips.com/first-meteor-tutorial/events/


	"click .clickable":function(event){
// JS CONSOLE.LOG : https://developer.mozilla.org/en-US/docs/Web/API/Console/log
		console.log(event.currentTarget.innerHTML)

		// get the _id of the database object
		// corresponding to the name i've clicked on
		// (we're going to need it when we try to update the db)
// MONGODB SELECTORS : https://docs.meteor.com/api/collections.html#selectors
		tempEleve = Eleves.findOne({
			"name":event.currentTarget.innerHTML})

		// if hidden was true, make it false
		// and vice versa (this is what =! does)
// JS BOOLEANS : https://www.w3schools.com/js/js_booleans.asp
		switchStatus =! tempEleve.hidden

		// update hidden with the new value
// METEOR UPDATE : https://docs.meteor.com/api/collections.html#Mongo-Collection-update
		Eleves.update(tempEleve._id, 
			{$set:{"hidden":switchStatus}
		})
	}
});
