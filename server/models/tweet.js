var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tweetSchema = new Schema({
    text:{type: String, required: true},
    created_at:{type: String},
    id_str:{type: String},
    username:{type:String}
})
module.exports= Tweet = mongoose.model('Tweet',tweetSchema);