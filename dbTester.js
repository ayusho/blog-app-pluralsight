var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/puppies');

var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

var Todo = mongoose.model('todo-new', TodoSchema);

Todo.create({
    name: 'clean up the room!!',
    completed: false
}).then(function(err, todo){
    console.log(err, todo);
})