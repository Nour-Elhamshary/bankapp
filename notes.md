====index file:
require http
createserver

====app file
require express
execute the express
require morgan
app.use(express.json());

middleware for morgan as dev


export app

==models
===client.js
const MongoClient = require("mongodb").MongoClient;
const URL = 127.0.0.1 and the rest
const getconnection = async () =>{
    const connect = await new MongoClient("URL").connect();
    const eCommerceDB=connect.db("E-Commerce");
    const clients = eCommerceDB.collection("clients");
    return clientCollection;
}

exports.add = async (client)=>{
    const clientCollection = await getConnection();

    const clientId=await clientCollection.insertOne(client);
    return clientId;
}

exports.selectOne = async (filter) =>{
    const clientCollection = await getConnection();
    const client = await clientsCollection.findOne(filter);
    return client;
}
==routers
===client.js
require express with routers
post
export clientrouter

==controllers
===client.js
require joi
require clientModel
middleware export add
getting data from the body as name, email and password
encapsulate the data as an object
validate the data{
    name=>min3.max10.pattern.required,
    email=>email.min7.max20.required,
    password=>min6.max20.required
}

check for validation error
<!-- check for DUP -->
const isDuplicatedEmail = await clientModel.selectOne({
    email: client.email,
});
if(isDuplicatedEmail!=null){
    return response.status(400).json({
        status:"error",
        message:`Email ${client.email} is duplicated`
    });
}

const clientId = await clientModel.add(client);
return response(201).json({
    status:"ok",
    message:"client is added",
})








NOTE:
we can have multiple middlewares
ex:
clientRouters.post( (req,res,next)=>{},(req,res)=>{})
app level mw => 
built-in mw
custom mw
custom mw
router mw
error-handling mw

we need to encrypt the password jesse
or hashing

ways to hash
pl->nt



login function

get data from body
<!-- validate data -->

const isValid = joi.object({}).validate(client);
if(isvalid.error){
    return error
}
<!-- check if email is found: -->
use the selectone func
queryresult 

<!-- compare password -->

const isCompatible= bcrypt.compareSync(client.password,queryresult.password);
if the iscompatible is TRUE
then return response
else error 401


assignment:
implmentation on products
CRUD Operation
title, desc, imageurl  