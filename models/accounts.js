const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://bankDB:bankDB@bankdb.2o1shqp.mongodb.net/Bank?retryWrites=true&w=majority"
const getConnection = async() =>{
    const connect = await new MongoClient(url).connect();
    const BankDB = connect.db("Bank");
    const accountsCollection = BankDB.collection("accounts");
    return accountsCollection;
} 
exports.selectOne = async(filter) =>{
    const accountCollection = await getConnection();
    const account = await accountCollection.findOne(filter);
    return account;
}

exports.add =  async(account)=>{
    const accountCollection = await getConnection();
    const accountId = await accountCollection.insertOne(account);
    return accountId;
}

exports.display = async() => {
    const accountCollection = await getConnection();
    const account = await accountCollection.find().toArray();
    return account;
}

exports.update = async (account) => {
    const accountCollection = await getConnection();
    const accounts = await accountCollection.findOneAndReplace(
        {
            name: account.name
        },
        {
            name: account.name,
            creditcard: account.creditcard,
            typeofaccount: account.typeofaccount
        }
    );
    return accounts;
}

exports.delete = async (creditcard) => {
    const accountCollection = await getConnection();
    const removed = await accountCollection.findOneAndDelete({
      creditcard: creditcard
    });
    return removed;
  };



exports.selectAll=async(filter)=>{
    const accountCollection=await getConnection();
    const accounts=await accountCollection.find(filter);
    return account;
}

