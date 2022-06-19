const dbConnect = require("./dbConnection");
const { readData } = require("./readData");

const insertData = async (data) => {
  let insert = await dbConnect();
  insert.insertOne(data, (err, res) => {
    if (!err) {
      console.log("1 data inserted");
      console.log(res.insertedId);
    }
  });

  let findAllData = await readData();
  console.log(findAllData);
};

const data = { name: "LG 5STAR AC", price: 40000, brand: "LG", category: "AC" };
insertData(data);
