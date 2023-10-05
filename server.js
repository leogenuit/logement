const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Apartment = require("./models/Apartment");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const dbURI =
  "mongodb+srv://leogenuit:4GMPb7Srs3UbG8mP@cluster0.mwibhpl.mongodb.net/my_habits?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("ouais ouais la connexion !! ");
});

app.get("/api/apartments", async (req, res) => {
  try {
    const apartments = await Apartment.find();
    // console.log(apartments);
    // if (apartments.length <= 0) {
    //   Apartment.create({
    //     title: "yo",
    //     bedrooms: 0,
    //     description: "sgdgdfgdfg",
    //     rooms: 0,
    //     square_meters: 0,
    //   });
    // }
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`ouais ouais le serveur ${PORT}`);
});
