const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://bankDB:bankDB@bankdb.2o1shqp.mongodb.net/Bank?retryWrites=true&w=majority"
const getConnection = async() =>{
    const connect = await new MongoClient(url).connect();
    const eCommerceDB = connect.db("Bank");
    const clientsCollection = eCommerceDB.collection("clients");
    return clientsCollection;
} 

exports.add =  async(client)=>{
    const clientCollection = await getConnection();
    const clientId = await clientCollection.insertOne(client);
    return clientId;
}

exports.selectOne = async(filter) =>{
    const clientcollection = await getConnection();
    const client = await clientcollection.findOne(filter);
    return client;
}