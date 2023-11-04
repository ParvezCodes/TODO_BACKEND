import { app } from "./app.js";
import { conntectDB } from "./data/database.js";

conntectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
