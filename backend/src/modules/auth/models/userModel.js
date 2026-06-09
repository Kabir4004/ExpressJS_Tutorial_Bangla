import mongoose from 'mongoose'
const userSchema = mongoose.schema({

    name:{
        type:String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [validation.nameMaxLength, `Name can not be more than ${validation.nameMaxLength} characters`]
    },

    email:{
        type:String,
        required: [true, 'Please add an email'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please add a valid email']
    },
    password:{
        type:String,
        required: [true, 'Please add a password'],
        minlength: [validation.passwordMinLength, `Password must be at least ${validation.passwordMinLength} characters`],
        select: false
    }

},{

    timestamps: true,
    versionKey: false


}

)


export const User = mongoose.model.User || mongoose.model('User', userSchema)