const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://bankDB:bankDB@bankdb.2o1shqp.mongodb.net/Bank?retryWrites=true&w=majority";
const getConnection = async () => {
  const connect = await new MongoClient(url).connect();
  const BankDB = connect.db("Bank");
  const loanCollection = BankDB.collection("loan");
  return loanCollection;
};

exports.add = async (loan) => {
  const loanCollection = await getConnection();
  const loanId = await loanCollection.insertOne(loan);
  return loanId;
};

exports.selectOne = async(filter)=>{
  const loanCollection = await getConnection();
  const loan = await loanCollection.findOne(filter);
  return loan;
};

exports.display = async () => {
  const loanCollection = await getConnection();
  const loan = await loanCollection.find().toArray();
  return loan;
};

exports.update = async (loan) => {
  const loanCollection = await getConnection();
  const loans = await loanCollection.findOneAndReplace(
    {
      title: loan.title,
    },
    {
      title: loan.title,
      amount: loan.amount,
      interest_rate: loan.interest_rate,
      length : loan.length
    }
  );
  return loans;
};

exports.delete = async (title) => {
  const loanCollection = await getConnection();
  const removed = await loanCollection.findOneAndDelete({
    title: title,
  });
  return removed;
};