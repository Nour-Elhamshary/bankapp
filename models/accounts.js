const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017"
const getConnection = async() =>{
    const connect = await new MongoClient(url).connect();
    const BankDB = connect.db("Bank");
    const accountsCollection = BankDB.collection("accounts");
    return accountsCollection;
} 

exports.add =  async(client)=>{
    const accountCollection = await getConnection();
    const accountId = await accountCollection.insertOne(client);
    return accountId;
}

exports.selectOne = async(filter) =>{
    const accountCollection = await getConnection();
    const account = await accountCollection.findOne(filter);
    return account;
}

exports.selectAll=async(filter)=>{
    const accountCollection=await getConnection();
    const accounts=await accountCollection.find(filter);
    return account;
}

