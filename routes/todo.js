const router = require('express').Router();
const Todo  = require('../models/Todo');

router.post('/add/todo',async(req,res)=>{
    //const {todo} = req.body;
    const newTodo = new Todo({
        todo:req.body.todo,
    });

    const saveitem = await newTodo.save()
    .then(()=>{
        console.log("Successfully added Todo!");
        //console.log(newTodo);
        res.redirect('/')

    })
    .catch(err => console.log(err))
})

router.get("/delete/todo/:_id",(req,res)=>{
     const {_id} = req.params;
     Todo.deleteOne({_id}).then(()=>{
        console.log("Deleted Successfully");
        res.redirect('/')
     })
     .catch(err=>console.log(err));
})

module.exports = router;