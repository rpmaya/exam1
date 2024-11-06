const express = require("express");
const router = express.Router();
const { validatorGetNFT, validatorGetBalance, validatorIPFSContent, validatorIPFSHash } = require("../validators/exam");
const { getNFT, getBalance, createContent, getContent } = require("../controllers/exam")

router.get("/nft/:contractAddress/:tokenId", validatorGetNFT, getNFT);

router.get("/balance/:contractAddress/:walletAddress", validatorGetBalance, getBalance);

router.post("/ipfs", validatorIPFSContent, createContent);

router.get("/ipfs", validatorIPFSHash, getContent);

module.exports = router;