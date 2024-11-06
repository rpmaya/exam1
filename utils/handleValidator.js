const { validationResult } = require("express-validator")

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw() 
        return next() 
    } catch (err) {
        console.log(err)
        res.status(422) 
        res.send(err)
    }
}

module.exports = validateResults