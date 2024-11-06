const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorGetNFT = [
  check("contractAddress").exists().notEmpty(),
  check("tokenId").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorGetBalance = [
  check("contractAddress").exists().notEmpty(),
  check("walletAddress").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorIPFSContent = [
  check("content").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorIPFSHash = [
  check("ipfsHash").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorGetNFT, validatorGetBalance, validatorIPFSContent, validatorIPFSHash }