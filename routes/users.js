let mongoose= require('mongoose');
mongoose.connect('mongodb+srv://srikanth4321:srikanth54321@cluster0.zetz3.mongodb.net/task?retryWrites=true&w=majority');

let schema=mongoose.Schema(
  {
    content:{
      type:String,
      required:true
    }
  }
)
module.exports=mongoose.model('tasks',schema);