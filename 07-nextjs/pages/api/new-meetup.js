// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
  }
  const client = await MongoClient.connect(
    "mongodb+srv://vietdev:<Congviet2001@@>@cluster0.59ezxwz.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.getCollection("meetups");

  const result = meetupsCollection.insertOne(data);

  console.log(result);

  client.close();

  res.status(201).json({ message: "Meetup inserted!" });
}
