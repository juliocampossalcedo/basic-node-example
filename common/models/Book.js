import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    chapters: {
      type: Number,
      require: true,
      trim: true
    },
    pages: {
      type: Number,
      require: true,
      trim: true
    },
    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
      }
    ]
  }, {
    timestamps : true,
  }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;