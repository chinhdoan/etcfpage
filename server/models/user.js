import mongoose from "mongoose";


const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true, unique: true },
  emailToken:{ type: String, required: true },
  password: { type: String},
  id: { type: String }
  
});

const User = mongoose.model("User", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};


module.exports = {User, validate};