const express =  require('express');
const {users, income, Expenses } = require('./data.js');
const admin = require('firebase-admin');
const path = require('path');

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL: "https://rest---api-default-rtdb.firebaseio.com/"
});

const router = express .Router();

const app = express();
const PORT =  process.env.PORT || 5000;

//Middleware to parse JSON data 
app.use(express.json());

// Route to get Users 
app.get ('/api/users', ( req ,res) => {
    res.json(users);
});

//Route to get Income
app.get('/api/income' ,(req ,res) =>{
    res.json(income);
});

//Route to get Expenses
app.get ('/api/expenses', (req , res) => {
    res.json(expenses);
});

//Start the Server
app.listen(PORT,() =>{
    console.log('Server is Running on http://localhost:${PORT}');

});

//Handle 404
app.use((req ,res) =>{
    res.status(404).json({message: 'NOT FOUND'});
});


app.listen(PORT, () =>
    console.log('server running on port:http//localhost: ${PORT}'));
//admin.auth()
   //.createUser({
    //email: "Komal@example.com",
    //emailVerified: false,
    //Password :"SecretPassword",
    //displayName : "Komal" ,
    //disabled :false
   //})


   

 //.then(userRecord => {
    //console.log("Successfully created new user: ,userRecord.uid");
    
    


 //.catch(error => {
    //console.log("Error ")
  // })

 // app.get ("/" , function( req ,res){
   //res.send('hello')
 // })
    //console.log('Server running ')

   //app.get('/username' ,(req ,res) => {
        //res.status(200)
    //});

    //const users = {
        //.id: 1,
        //name:"Femi ola",
        //username:"Femi",
        //email: "olluwafemi@sozenetech.com",
    
    


    router.get('/ ',(req,res) =>  {
        console.log(users);
        res.send("users")
    });
    router.post('/', (req ,res) =>{
        console.log =req.body;
        

        users.push(users);
        res.send('user with the name ${user.firstName} added to the database!');
    });

    export default router;
