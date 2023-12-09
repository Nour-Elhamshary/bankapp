const { request } = require("express");
const clientModels=require("../models/clients");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

exports.add = async (request,response)=>{
    //retrieve data
    const { name, email, password} = request.body;

    const client = {
        name,
        email, 
        password
    };
    
    //validation
    const schema = joi.object({
        name: joi.string().min(3).max(10).pattern(/[A-Za-z]{1,32}/).required(),
        email: joi.string().email().min(10).max(20).required(),
        password: joi.string().min(5).max(20).required(),
    });

    const validation=schema.validate(client);
    if(validation.error){
        return response.status(400).json({
            state:"Error",
            message:validation.error
        });
    }

    //check for dup
    const isDupEmail= await clientModels.selectOne({
        email: client.email,
    });
    if(isDupEmail!=null){
        return response.status(400).json({
            status:"error",
            message:`Email ${client.email} is dupplicated`,
        });
    }

    //hashing the password

    const salt= bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(client.password,salt);
    client.password=hashPassword;

    //add the client to DB

    const clientId = await clientModels.add(client);
    return response.status(201).json({
        status:"ok",
        message:"client has been added"
    });
}

exports.login= async (request,response)=>{
    const {email, password}= request.body;
    const client = {
        email, password
    };
    const schema = joi.object({
        email: joi.string().email().min(10).max(20).required(),
        password: joi.string().min(5).max(20).required(),
    });

    const validation=schema.validate(client);
    if(validation.error){
        return response.status(400).json({
            state:"Error",
            message:validation.error
        });
    }

    const queryResult = await clientModels.selectOne({
        email:client.email,
    });

    if(queryResult==null){
        return response.status(404).json({
            status:"error",
            message:`Email ${client.email} doesnt exist`
        });
    }

    


    const iscompatible = bcrypt.compareSync(
        client.password,
        queryResult.password
    );

    if(iscompatible){
        jwt.sign({
            name: queryResult.name,
            email:queryResult.email,
        }, 
        '123456789', 
         (error, token)=>{
            if(error){
                return response.status(500).json({
                status:"Error",
                message:"Internal Server Error",
            });
            } else{
                return response.status(200).json({
                    status:"ok",
                    message:"user logged in",
                    token: token,
                });
            }
        });
    } else{
        return response.status(400).json({
            status:"error",
            message:"invalid password"
        });
    }


}

