import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Eleves = new Mongo.Collection("eleves")

Template.hello.onCreated(function helloOnCreated() {
});

Template.hello.helpers({

	eleves:function(){
		return Eleves.find({})
	},

	opacityChanger:function(){
		if (this.hidden==true) {
			return 0.1
		}else{
			return 1
		}
	}

});

Template.hello.events({

	"click .clickable":function(event){
		console.log(event.currentTarget.innerHTML)

		// get the _id of the database object
		// corresponding to the name i've clicked
		// on
		tempEleve = Eleves.findOne({
			"name":event.currentTarget.innerHTML})
		switchStatus =! tempEleve.hidden

		Eleves.update(tempEleve._id, 
			{$set:{"hidden":switchStatus}
		})
	}

});
