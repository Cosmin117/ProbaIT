const mongoose = require('mongoose')

const User = new mongoose.Schema({
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required:true
	}
})

const collection = mongoose.model("collection", User)

module.exports=collection