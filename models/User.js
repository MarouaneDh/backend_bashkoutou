const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
    role: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: false
    }
});
module.exports = User = mongoose.model("user", userSchema);