const express = require('express');
const router = express.Router();
const { getToDo, saveToFoDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');

router.get('/', getToDo);
router.post('/save', saveToFoDo);
router.put('/update', updateToDo);
router.delete('/delete', deleteToDo);

module.exports = router;