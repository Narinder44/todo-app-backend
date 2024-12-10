const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
};

module.exports.saveToFoDo = async (req, res) => {
    const { text } = req.body;
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added successfully");
            res.send(data);
        });
};

module.exports.updateToDo = async (req, res) => {
    try {
        const { _id, text } = req.body;
        console.log('Updating todo:', { _id, text }); // Debug log

        const result = await ToDoModel.findByIdAndUpdate(
            _id,
            { text },
            { new: true }
        );

        if (!result) {
            return res.status(404).json({ message: "Todo not found" });
        }
        
        res.json(result);
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ message: "Error updating todo", error: error.message });
    }
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully"))
        .catch((err) => res.send(err));
};