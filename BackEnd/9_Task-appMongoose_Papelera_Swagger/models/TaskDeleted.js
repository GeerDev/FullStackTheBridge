const mongoose = require("mongoose");

const TaskDeletedSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  expireAt: {
    type: Date,
    required: true
}
});
TaskDeletedSchema.index({ expireAt: 1 }, { expireAfterSeconds : 300 });
const TaskDeleted = mongoose.model("TaskDeleted", TaskDeletedSchema);
module.exports = TaskDeleted;
