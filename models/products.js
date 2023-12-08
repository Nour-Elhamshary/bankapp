const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const getConnection = async () => {
  const connect = await new MongoClient(url).connect();
  const eCommerceDB = connect.db("E-Commerce");
  const productsCollection = eCommerceDB.collection("products");
  return productsCollection;
};

exports.add = async (product) => {
  const productsCollection = await getConnection();
  const productId = await productsCollection.insertOne(product);
  return productId;
};

exports.selectOne = async(filter)=>{
  const productsCollection = await getConnection();
  const product = await productsCollection.find(filter).toArray();
  return product;
};

exports.display = async () => {
  const productsCollection = await getConnection();
  const product = await productsCollection.find().toArray();
  return product;
};

exports.update = async (product) => {
  const productsCollection = await getConnection();
  const products = await productsCollection.findOneAndReplace(
    {
      name: product.title,
    },
    {
      name: product.title,
      description: product.description,
      imageurl: product.imageurl,
    }
  );
  return products;
};

exports.delete = async (title) => {
  const productsCollection = await getConnection();
  const removed = await productsCollection.findOneAndDelete({
    title: title,
  });
  return removed;
};
