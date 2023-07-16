var express = require('express')
var app = express();

const cors = require('cors')
app.use(cors());

app.get('/api',function(req,res){
    res.send("data");
})

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/app6');

var userSchema = mongoose.Schema({
    id:String,
    name:String,
    email:String,
    phone:String,
    password:String
})

var users = mongoose.model('users',userSchema);
app.post('/postApi',function(req,res){
    var userData = req.body;

     if( userData.id || !userData.name || !userData.email || !userData.phone || !userData.password){
         res.send("please ! provide full information")
     }else{
            var newUser = new users({
                id : userData.id,
                name : userData.name,
                email:userData.email,
                phone:userData.phone,
                password:userData.password
            });
            users.create(newUser);
            res.send('data is created successfully');
     }
})




// const User = require('./models/user');

// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find({}, '_id name');
//     res.json(users);
//   } catch (err) {
//     console.log(err);
//     // res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


//for serial no .like 1,2,3 
// app.get('/showdata', (req, res) => {
//     users.find({}, 'name').then(function(data) {
//       const userList = data.map((user, index) => {
//         return {
//           id: index + 1,
//           name: user.name
//         };
//       });
//       res.send(userList);
//     }).catch(function(err) {
//       console.log(err);
//     //   res.status(500).json({ error: 'Internal Server Error' });
//     });
//   });


//for showdata on fronted
app.get('/showdata', (req, res) => {
    users.find({}, '_id name').then(function(data) {
      const userList = data.map(user => {
        return {
          id: user._id.toString(),
          name: user.name
        };
      });
      res.send(userList);
    }).catch(function(err) {
      console.log(err);
    //   res.status(500).json({ error: 'Internal Server Error' });
    });
  });
  
  

  // for view data
app.get('/viewdata',(req,res)=>{
    users.find().then(function(data){
        res.send(data);
    })
})


 // delete api

app.delete('/delete/:id',(req,res)=>{
    users.findByIdAndRemove(req.params.id).then(function(){
        res.send("here is deleting data")
    })
})


// for edit data api
app.post('/EditData/:id',(req,res)=>{
    users.find({_id:req.params.id}).then(function(data){ 
              res.send(data);
   })
});


// for update api
app.post('/updateData/:id',(req,res)=>{
    var data = req.body;
     users.updateOne({_id:req.params.id},{ name:data.name, phone:data.phone, password:data.password, email:data.email})
            .then(function(data){
            res.send(data);
        });

 })

 /// Api for login Authentication ====

app.post('/login',async(req,res)=>{
    var output={
        status:false,
        message:"Email or password is incorrect",
        data:[]
    }
    var Userdata= req.body;
       var userss= await users.find({email:Userdata.email,password:Userdata.password}).then(function(data){
          return data;
        });
        if(userss.length>0){
            output.status=true;
            output.message="Login Success";
            output.data=userss[0];
            res.send(output);
        }
        else{
            res.send(output);
        }
});

app.listen(5002, ()=>{
    console.log("app is running here")
})