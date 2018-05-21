const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
    googleId: String
});

console.log(userSchema)

mongoose.model('users', userSchema);