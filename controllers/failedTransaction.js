
const tModel = require("../models/failedTransaction");
const joi = require("joi");

exports.add = async (request, response) => {
  const { name,amount } = request.body;
  const t = { name, amount};

  const schema = joi.object({
    name: joi
      .string()
      .min(3)
      .max(50)
      .pattern(/[A-Za-z]{1,32}/)
      .required(),
    amount: joi.number().integer().required(),
    
  });

  const validation = schema.validate(t);
  if (validation.error) {
    return response.status(400).json({
      state: "Error",
      message: validation.error,
    });
  }

  const tId = await tModel.add(t);
  return response.status(201).json({
    status: "ok",
    message: "Product has been successfully added to the DB",
  });
};

exports.display = async (request, response) => {
  const productAll = await tModel.display();
  return response.status(200).json(productAll);
};

exports.update = async (request, response) => {
  const { name,amount } = request.body;
  const product = { name,amount };

  const schema = joi.object({
    name: joi
      .string()
      .min(3)
      .max(50)
      .pattern(/[A-Za-z]{1,32}/)
      .required(),
    amount: joi.number().integer().required(),
    
  });

  const validation = schema.validate(product);
  if (validation.error) {
    return response.status(400).json({
      state: "Error",
      message: validation.error,
    });
  }

  const checkName = await tModel.selectOne({
    name: product.name,
  });
  if (checkName == null) {
    return response.status(400).json({
      status: "error",
      message: ` ${product.name} Doesn't Exist in the DB`,
    });
  } else{
    const queryresult= await tModel.update(product);
    return response.status(201).json({
      status:"ok",
      message: ` ${product.name} Succesfully Updated in the DB`
    });
  }
};
