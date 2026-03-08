import { Schema, model } from 'mongoose';

const PhoneSchema = new Schema({
    type: String,
    number: String
})

const UserSchema = new Schema({
    username: { 
        type: String,
        required: [true, "Username is a required field"], 
        unique: true,
        max: 20,
        min: 4,
        trim: true,
        lowercase: true
     },
    password: { type: String, required: true },
    firstname: String,
    lastname: { type: String },
    email: { type: String, index: true },
    address: {
        area: String,
        street: String,
        number: String,
        po: String,
        municipality: String
    },
    phone: { type: [PhoneSchema], null: true }
}, {
    collection: "users",
    timestamps: true
});

export default model("User", UserSchema);