const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://bankDB:bankDB@bankdb.2o1shqp.mongodb.net/Bank?retryWrites=true&w=majority";
const getConnection = async () => {
  const connect = await new MongoClient(url).connect();
  const bankDB = connect.db("Bank");
  const FTcollection = bankDB.collection("failedTransaction");
  return FTcollection;
};

exports.add = async (p) => {
  const FTcollection = await getConnection();
  const ftId = await FTcollection.insertOne(p);
  return ftId;
};

exports.selectOne = async(filter)=>{
  const FTcollection = await getConnection();
  const p = await FTcollection.find(filter).toArray();
  return p;
};

exports.display = async () => {
  const FTcollection = await getConnection();
  const p= await FTcollection.find().toArray();
  return p;
};

exports.update = async (product) => {
  const FTcollection = await getConnection();
  const products = await FTcollection.findOneAndReplace(
    {
      name: product.name,
    },
    {
      name: product.name,
      amount: product.amount,

    }
  );
  return products;
};

