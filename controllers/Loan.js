const loanModel = require("../models/Loan");
const joi = require("joi");

exports.add = async (request, response) => {
  const { title , amount , interest_rate ,length} = request.body;
  const loan = { title , amount , interest_rate ,length};

  const schema = joi.object({
    title: joi
      .string()
      .min(3)
      .max(50)
      .pattern(/[A-Za-z]{1,32}/)
      .required(),
    amount: joi.number().less(50000).required(),
    interest_rate: joi.number().less(10).required(),
    length : joi.number().less(5).required()
  });

  const validation = schema.validate(loan);
  if (validation.error) {
    return response.status(400).json({
      state: "Error",
      message: validation.error,
    });
  }

  const checkTitle = await loanModel.selectOne({
    title: loan.title,
  });
  if (checkTitle != null) {
    return response.status(400).json({
      status: "error",
      message: ` ${loan.title} Exist in the DB  some thing`,
    });
  }


  

  const loanId = await loanModel.add(loan);
  return response.status(201).json({
    status: "ok",
    message: "loan has been successfully added to the DB",
  });
};

exports.display = async (request, response) => {
  const Allloans = await loanModel.display();
  return response.status(200).json(Allloans);
};

exports.update = async (request, response) => {
    const { title , amount , interest_rate ,length} = request.body;
    const loan = { title , amount , interest_rate ,length};
  const schema = joi.object({
    title: joi
      .string()
      .min(3)
      .max(50)
      .pattern(/[A-Za-z]{1,32}/)
      .required(),
    amount: joi.number().less(50000).required(),
    interest_rate: joi.number().less(10).required(),
    length : joi.number().less(5).required(),
  });

  const validation = schema.validate(loan);
  if (validation.error) {
    return response.status(400).json({
      state: "Error",
      message: validation.error,
    });
  }

  const checkTitle = await loanModel.selectOne({
    title: loan.title,
  });
  if (checkTitle == null) {
    return response.status(400).json({
      status: "error",
      message: ` ${loan.title} Doesn't Exist in the DB`,
    });
  } else{
    const queryresult= await loanModel.update(loan);
    return response.status(201).json({
      status:"ok",
      message: ` ${loan.title} Succesfully Updated in the DB`
    });
  }
};



exports.delete = async (request,response) => { 
  const loan=request.body;
  const schema = joi.object({
    title: joi
      .string()
      .min(3)
      .max(50)
      .pattern(/[A-Za-z]{1,32}/)
      .required(),
    
  });
  const validation = schema.validate(loan);
  if (validation.error) {
    return response.status(400).json({
      state: "Error : title is invalid",
      message: validation.error,
    });
  }

  const title=loan.title;
  const checkTitle = await loanModel.selectOne({
    title: title,
  });
  if (checkTitle == null) {
    return response.status(400).json({
      status: "error",
      message: ` ${title} Doesn't Exist in the DB`,
    });
  } else{
    const queryresult= await loanModel.delete(title);
    return response.status(201).json({
      status:"ok",
      message: ` ${title} Succesfully Updated in the DB`
    });
  }
}