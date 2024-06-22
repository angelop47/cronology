const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
