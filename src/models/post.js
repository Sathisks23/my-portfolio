const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['technology', 'freelancing', 'personal', 'others'], // Post categories
      required: true,
    },
    imageUrl: {
      type: String, // URL for the post image
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the user who created the post
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model('Post', postSchema);
  