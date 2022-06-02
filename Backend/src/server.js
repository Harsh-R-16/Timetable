const app = require("./index");
require("dotenv").config();
const server = require("./configs/db");

app.listen(process.env.PORT || 3030, async (req, res) => {
  try {
    await server();
    console.log("Default port is active on PORT");
  } catch (e) {
    console.log("e:", e);
  }
});
