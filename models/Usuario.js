import mongoose,{Schema} from 'mongoose';


const UsuarioSchema = new Schema({

    name: {
        type:String,
        maxlength: 250,
    },


    age: {
        type:String,
        required:true,
        maxlength: 250,
    },
    city: {
        type:String,
        required:true,
        maxlength: 250,
    },
    

});

const Usuario = mongoose.model('users', UsuarioSchema);
export default Usuario;