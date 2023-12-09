const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://bankDB:bankDB@bankdb.2o1shqp.mongodb.net/Bank?retryWrites=true&w=majority";
const getConnection = async () => {
  const connect = await new MongoClient(url).connect();
  const BankDB = connect.db("Bank");
  const virtualCollection = BankDB.collection("virtualCard");
  return virtualCollection;
};

exports.add = async (product) => {
    const virtualCollection = await getConnection();
    const virtualID = await virtualCollection.insertOne(product);
    return virtualID;
  };

  exports.display = async() => {
    const virtualCollection = await getConnection();
    const card = await virtualCollection.find().toArray();
    return card;
}

exports.selectOne = async(filter)=>{
    const virtualCollection = await getConnection();
    const Card = await virtualCollection.find(filter).toArray();
    return Card;
  };