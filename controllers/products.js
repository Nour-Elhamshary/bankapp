const productModels = require("../models/products");
const joi = require("joi");

exports.add = async (request, response) => {
  const { title, description, imageurl } = request.body;
  const product = { title, description, imageurl };

  const schema = joi.object({
    title: joi
      .string()
      .min(3)
      .max(50)
      .pattern(/[A-Za-z]{1,32}/)
      .required(),
    description: joi.string().min(5).required(),
    imageurl: joi.string().max(2000).required(),
  });

  const validation = schema.validate(product);
  if (validation.error) {
    return response.status(400).json({
      state: "Error",
      message: validation.error,
    });
  }

  const checkTitle = await productModels.selectOne({
    title: product.title,
  });
  if (checkTitle != null) {
    return response.status(400).json({
      status: "error",
      message: ` ${product.title} Exist in the DB`,
    });
  }

  const productId = await productModels.add(product);
  return response.status(201).json({
    status: "ok",
    message: "Product has been successfully added to the DB",
  });
};

exports.display = async (request, response) => {
  const productAll = await productModels.display();
  return response.status(200).json(productAll);
};

exports.update = async (request, response) => {
  const { title, description, imageurl } = request.body;
  const product = { title, description, imageurl };

  const schema = joi.object({
    title: joi
      .string()
      .min(3)
      .max(50)
      .pattern(/[A-Za-z]{1,32}/)
      .required(),
    description: joi.string().min(5).required(),
    imageurl: joi.string().max(2000).required(),
  });

  const validation = schema.validate(product);
  if (validation.error) {
    return response.status(400).json({
      state: "Error",
      message: validation.error,
    });
  }

  const checkTitle = await productModels.selectOne({
    title: product.title,
  });
  if (checkTitle == null) {
    return response.status(400).json({
      status: "error",
      message: ` ${product.title} Doesn't Exist in the DB`,
    });
  } else{
    const queryresult= await productModels.update(product);
    return response.status(201).json({
      status:"ok",
      message: ` ${product.title} Succesfully Updated in the DB`
    });
  }
};

exports.delete = async (request,response) => { 
  const title=request.body;
  const schema=joi.object({
    title: joi.string()
    .min(3)
    .max(50)
    .pattern(/[A-Za-z]{1,32}/)
    .required(),
  });
  const validation = schema.validate(title);
  if (validation.error) {
    return response.status(400).json({
      state: "Error",
      message: validation.error,
    });
  }

  const checkTitle = await productModels.selectOne({
    title: title,
  });
  if (checkTitle == null) {
    return response.status(400).json({
      status: "error",
      message: `  Doesn't Exist in the DB`,
    });
  } else{
    const queryresult= await productModels.delete(title);
    return response.status(201).json({
      status:"ok",
      message: `  Succesfully Updated in the DB`
    });
  }
}