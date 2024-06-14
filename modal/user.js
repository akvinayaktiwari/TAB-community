import mongoose from "mongoose";



const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name"]
    },
    email: {
        type: String,
        required:[true,"Please provide an email"],
        unique:true
    },
    password: {
        type :String,
        required: [true,"Please provide a password"]
    },
},{
    timestamps: true,
})

export default mongoose.models.user || mongoose.model('user', userSchema);
