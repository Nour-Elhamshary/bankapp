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

exports.transferBetweenAccounts = async(filter1, filter2, amount) => {
    //console.log({filter1, filter2, amount});
    const accountCollection = await getConnection();
    var account1 = await accountCollection.findOne(filter1);
    var account2 = await accountCollection.findOne(filter2);
    //console.log(account1);
    account1.balance -= amount;
    account2.balance += amount;
    await accountCollection.replaceOne(filter1, account1);
    await accountCollection.replaceOne(filter2, account2);
    return {account1, account2};
}

