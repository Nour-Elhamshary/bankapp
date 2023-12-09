const virtualModels = require("../models/virtualCard");
const joi = require("joi");

exports.add = async (request, response) => {
    //console.log(req.body);
    const { name, balance, limit} = request.body;

    const virtual = {
        name,
        balance, 
        limit
    };

    const schema = joi.object({
        name:           joi.string().max(12).required(),
        balance:        joi.number().required(),
        limit:          joi.number().required(),
    });
    
    const validation = schema.validate(virtual);
    if (validation.error) {
        return response.status(400).json({
            state: "Error: First account cannot be validated",
            message: validation.error
        });
    }

    const card={
        name:name,
        creditCard:(Math.random()+' ').substring(2,10)+(Math.random()+' ').substring(2,10),
        limit:limit     
    }
    const virtualID = await virtualModels.add(card);
    return response.status(201).json({
        status: "OK!",
        message: "Virtual Card has successfully created!"
    });
}

exports.display = async (request, response) => {
    const cardAll = await virtualModels.display();
    return response.status(200).json(cardAll);
  };