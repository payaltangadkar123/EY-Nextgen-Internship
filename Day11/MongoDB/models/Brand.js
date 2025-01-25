const mongoose=require('mongoose');

//Define schema for Brand
const brandSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: String
});

module.exports = mongoose.model('Brand',brandSchema);


