const TaskDeleted = require("../models/TaskDeleted");
const Task = require("../models/Task");

const TaskDeletedController = {
  async create(req, res) {
    const taskDeleted = await TaskDeleted.findById(req.params._id);
    const {title,completed} = taskDeleted
    const task = await Task.create({title,completed});
    res.status(201).send(task);
  },
};

module.exports = TaskDeletedController;
