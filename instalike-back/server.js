import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas Vindas à Imersão Dev Back-End!!!");
  console.log(res);
});