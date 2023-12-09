const accountModels = require("../models/accounts");
const joi = require("joi");

exports.add = async (req, res) => {
    const {name, creditcard, typeofaccount, balance} = req.body;
    const account = {name, creditcard, typeofaccount, balance};

    const schema = joi.object({
        name:           joi.string().max(12).required(),
        creditcard:     joi.string().min(16).required(),
        typeofaccount:  joi.string().required(),
        balance: joi.number().required()
    });

    const validation = schema.validate(account);
    if (validation.error) {
        return res.status(400).json({
            state: "Error: Account cannot be validated",
            message: validation.error
        });
    }
    
    const checkCardExistence = await accountModels.selectOne({
        creditcard: account.creditcard
    });
    if (checkCardExistence != null) {
        return res.status(400).json({
            status: "Error.",
            message: `Account related to the card already exists.`
        });
    }

    const accountAddition = await accountModels.add(account);
    return res.status(201).json({
        status: "OK!",
        message: "Account has been successfully added to the database!"
    });
};

exports.update = async (req, res) => {
    const { name, creditcard, typeofaccount, balance} = req.body;
    const account = {name, creditcard, typeofaccount, balance};

    const schema = joi.object({
        name:           joi.string().max(12).required(),
        creditcard:     joi.string().min(16).required(),
        typeofaccount:  joi.string().required(),
        balance: joi.number.required()
    });

    const validation = schema.validate(account);
    if (validation.error) {
        return res.status(400).json({
            state: "Error: Account cannot be validated",
            message: validation.error
        });
    }
    
    const checkCardExistence = await accountModels.selectOne({
        creditcard: account.creditcard
    });
    if (checkCardExistence != null) {
        return res.status(400).json({
            status: "Error.",
            message: `Account related to the card already exists.`
        });
    }

    const accountUpdate = await accountModels.update(account);
    return res.status(201).json({
        status: "OK!",
        message: "Account has been successfully updated to the database!"
    });
};

exports.delete = async (req, res) => {
    const account = req.body;
    const schema = joi.object({
        creditcard:     joi.string().min(16).required()
    });

    const validation = schema.validate(account);
    if (validation.error) {
        return res.status(400).json({
            state: "Error: Account cannot be validated",
            message: validation.error
        });
    }
    
    const creditcard = account.creditcard;
    const checkCardExistence = await accountModels.selectOne({
        creditcard: creditcard
    });
    if (checkCardExistence == null) {
        return res.status(400).json({
            status: "Error.",
            message: `Account related to the card does not exist.`
        });
    }

    const accountDelete = await accountModels.delete(creditcard);
    return res.status(201).json({
        status: "OK!",
        message: "Account has been successfully deleted to the database!"
    });
};

exports.display = async (req, res) => {
    const allAccounts = await accountModels.display();
    return res.status(200).json(allAccounts);
};