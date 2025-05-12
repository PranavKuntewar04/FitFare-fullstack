const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/user");
const { gymRouter } = require("./routes/gym");
const { feedbackRouter } = require("./routes/feedback");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/register", userRouter);
app.use("/feedback", feedbackRouter);
app.use("/gyms", gymRouter);

console.log("App listening on port:3000");
app.listen(3000);
