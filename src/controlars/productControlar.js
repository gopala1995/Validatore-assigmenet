const express = require("express")

const { body, validationResult } = require('express-validator');

const {formatErr} = require("../utils/Validatiors")

const router = express.Router()

const Product = require("../models/product.model")

router.get("",async(req,res)=>{
    const products = await Product.find().lean().exec()
    return res.send(products)
})

router.post("",body("name").notEmpty().withMessage("Name is erequired").isLength({min:3}).withMessage("Name is erequired at least 3 character"), async(req,res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
      return res.status(400).json({ errors: formatErr(errors.array()) });
    }
    const product = await Product.create(req.body)
    return res.send(product)
})
module.exports = router