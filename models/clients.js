const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017"
const getConnection = async() =>{
    const connect = await new MongoClient(url).connect();
    const eCommerceDB = connect.db("E-Commerce");
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