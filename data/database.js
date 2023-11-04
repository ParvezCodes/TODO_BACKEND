import mongoose from "mongoose";



export const conntectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "TODO",
    })
    .then((c) => {
      console.log(`DB connected with ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
