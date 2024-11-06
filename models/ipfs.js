const mongoose = require("mongoose")

const ipfsSchema = new mongoose.Schema({
  content: String,
  ipfsHash: String,
});

module.exports = mongoose.model("IPFS", ipfsSchema);