const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

userSchema.method('encryptPassword', function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
});

userSchema.method('validPassword', function (password) {
    return bcrypt.compareSync(password, this.password);
});


module.exports = model('User', userSchema);