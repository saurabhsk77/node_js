const dbConnect = require("./dbConnection");

const readData = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  return data;
};

// readData();

const readCustomData = async (dataEntry) => {
  let data = await dbConnect();
  data = await data.find(dataEntry).toArray();
  console.warn(data);
};

// readCustomData({ name: "f22" });
module.exports = { readData, readCustomData };
