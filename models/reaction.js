const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => {
        return new Types.ObjectId()
      },
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
    required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timeStamp) => {
          return timeStamp
        },
      },    
},

);



module.exports = reactionSchema;