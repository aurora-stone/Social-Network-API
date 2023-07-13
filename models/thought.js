const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 50,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) => {
        return timeStamp
      },
    },
    username: [{
      type: String,
    required: true,
    }],
    reactions: [reactionsSchema],
},
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;