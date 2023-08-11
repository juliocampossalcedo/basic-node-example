import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
      }
    ]
  }, {
    timestamps : true,
  }
);

const Author = mongoose.model("Author", authorSchema);
export default Author;