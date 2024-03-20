import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const entrySchema = new Schema({
    language:{
        type: String,
        required: true
    },    
    word:{
        type: String,
        required: true
    },
    apiTranslation:{ 
        type: String,
        required: false
    },
    userTranslation:{ 
        type: String,
        required: false
    },
    annotations:{
        type: Number,
        required: false
    }
},{
    timestamps: true,        
});

export default mongoose.model('Workout', workoutSchema);