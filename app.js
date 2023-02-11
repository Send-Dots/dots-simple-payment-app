import express from "express";
const app = express();
import path from "path";
import open from "open";
import fetch from "node-fetch";

const __dirname = path.resolve();

const port = process.env.port || 5000;

const dotsClientId = "YOUR_CLIENT_ID";
const dotsSecretKey = "YOUR_SECRET_KEY";
const dotsAPIUrl = "https://api-staging.dots.dev/api"; // 'https://pls.senddotssandbox.com/api'; // 'http://127.0.0.1:8080/api' | 'https://api.dots.dev/api'

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/create-payment-intent", (req, res) => {
  const amount = req.body.amount;

  fetch(dotsAPIUrl + "/v2/payment-intents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(
        `${dotsClientId}:${dotsSecretKey}`
      ).toString("base64")}`,
    },
    body: JSON.stringify({
      amount: amount,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json({ client_secret: data.client_secret });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
