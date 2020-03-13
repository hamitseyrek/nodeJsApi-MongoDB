let mongoose = require('mongoose');

let noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    detail: String,
    created_at: {
        type: Date,
        default: Date.now,
    }
});

let Note = module.exports = mongoose.model("note", noteSchema);

module.exports.get = function (callback, limit) {
    Note.find(callback).limit(limit);
}