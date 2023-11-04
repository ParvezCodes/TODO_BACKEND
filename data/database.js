import mongoose from "mongoose";



export const conntectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "TODO",
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
