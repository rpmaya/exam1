const express = require("express");
const router = express.Router();
const { validatorGetNFT, validatorGetBalance, validatorIPFSContent, validatorIPFSHash } = require("../validators/exam");
const { getNFT, getBalance, createContent, getContent } = require("../controllers/exam")

/**
 * @openapi
 * /api/nft/{contractAddress}/{tokenId}:
 *  get:
 *      tags:
 *      - NFT
 *      summary: Get NFT Metadata
 *      description: 'Retrieves a specific NFT metadata.'
 *      parameters:
 *          -   name: contractAddress
 *              in: path
 *              description: NFT contract address
 *              required: true
 *              schema:
 *                  type: string
 *          -   name: tokenId
 *              in: path
 *              description: NFT Token Id
 *              required: true
 *              schema:
 *                  type: string
 *      responses:
 *          '200':
 *              description: OK. Returns the specified NFT metadata.
 *          '500':
 *              description: Internal server error
 */
router.get("/nft/:contractAddress/:tokenId", validatorGetNFT, getNFT);

/**
 * @openapi
 * /api/balance/{contractAddress}/{walletAddress}:
 *  get:
 *      tags:
 *      - Balance
 *      summary: Get Balance
 *      description: 'Retrieves wallet balance.'
 *      parameters:
 *          -   name: contractAddress
 *              in: path
 *              description: Contract address
 *              required: true
 *              schema:
 *                  type: string
 *          -   name: walletAddress
 *              in: path
 *              description: Wallet Address
 *              required: true
 *              schema:
 *                  type: string
 *      responses:
 *          '200':
 *              description: OK. Returns the balance.
 *          '500':
 *              description: Internal server error
 */
router.get("/balance/:contractAddress/:walletAddress", validatorGetBalance, getBalance);

/**
 * @openapi
 * /api/ipfs:
 *  post:
 *      tags:
 *      - IPFS
 *      summary: Add object to IPFS
 *      description: 'Adds a new object to IPFS.'
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/ipfs"
 *      responses:
 *          '200':
 *              description: OK. Returns the inserted object.
 *          '422':
 *              description: Validation error. The request body contains invalid fields.
 *          '500':
 *              description: Internal server error
 */
router.post("/ipfs", validatorIPFSContent, createContent);

/**
 * @openapi
 * /api/nft/{ipfsHash}:
 *  get:
 *      tags:
 *      - IPFS
 *      summary: Get Content from IPFS Hash
 *      description: 'Retrieves content.'
 *      parameters:
 *          -   name: ipfsHash
 *              in: path
 *              description: IPFS Hash
 *              required: true
 *              schema:
 *                  type: string
 *      responses:
 *          '200':
 *              description: OK. Returns the balance.
 *          '500':
 *              description: Internal server error
 */
router.get("/ipfs", validatorIPFSHash, getContent);

module.exports = router;