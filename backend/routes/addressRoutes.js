import express from "express";
import Address from "../models/addressModel.js";

const router = express.Router();

// Save address
router.post("/", async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    await newAddress.save();
    res.status(201).json({ message: "Address saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save address" });
  }
});

// Optional: fetch all addresses
router.get("/", async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch addresses" });
  }
});

export default router;
