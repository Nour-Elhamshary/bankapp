const remittanceModels = require("../models/fundremittance");
const joi = require("joi");

exports.transferBetweenAccounts = async (req, res) => {
    //console.log(req.body);
    const account1 = req.body.account1;
    const account2 = req.body.account2;
    const amount = req.body.amount;
    //console.log(account1);
    const schema = joi.object({
        name:           joi.string().max(12).required(),
        creditcard:     joi.string().min(16).required(),
        typeofaccount:  joi.string().required(),
        balance: joi.number().required()
    });

    const balanceSchema =  joi.number().greater(0).required();
    
    const validation1 = schema.validate(account1);
    if (validation1.error) {
        return res.status(400).json({
            state: "Error: First account cannot be validated",
            message: validation1.error
        });
    }

    const validation2 = schema.validate(account2);
    if (validation2.error) {
        return res.status(400).json({
            state: "Error: Second account cannot be validated",
            message: validation2.error
        });
    }

     const validateBalance = balanceSchema.validate(account1.balance);
     if (validateBalance.error) {
         return res.status(400).json({
             state: "Error: Not enough balance.",
             message: validateBalance.error
         });
     }

    const transferFunds = await remittanceModels.transferBetweenAccounts(account1, account2, amount);
    return res.status(201).json({
        status: "OK!",
        message: "Account 1 has successfully transferred funds to account 2!"
    });
}