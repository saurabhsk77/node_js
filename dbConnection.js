const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const dbConnect = async () => {
  const result = await client.connect();
  db = result.db("e-commerce");
  return db.collection("products");
};

module.exports = dbConnect;

// client.connect(async (err) => {
//   if (err) {
//     console.log(err);
//   }
//   const collection = client.db("e-commerce").collection("products");

//   //   collection.updateOne(
//   //     { name: "saurabh" },
//   //     { $set: { price: 200 } },
//   //     (err, res) => {
//   //       if (err) throw err;
//   //       console.log("1 document updated");
//   //       console.log(res);
//   //     }
//   //   );

//   //   collection.deleteOne({ name: "saurabh" }, (err, res) => {
//   //     if (err) throw err;
//   //     console.log("1 document deleted");
//   //     console.log(res);
//   //   });

//   //   collection.insertMany(
//   //     [
//   //       { name: "f22", price: 14000, category: "mobile" },
//   //       { name: "f33", price: 17000, category: "mobile" },
//   //     ],
//   //     (err, res) => {
//   //       if (err) throw err;
//   //       console.log("2 documents inserted");
//   //       console.log(res.insertedIds);
//   //     }
//   //   );

//   const fetchedData = await collection.find({}).toArray();
//   client.close();
//   console.log(fetchedData);
// });
