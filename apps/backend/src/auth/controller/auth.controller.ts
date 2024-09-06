import { Body, Controller, Get, HttpException, Post,Req,Res } from '@nestjs/common';
import {PrismaService} from '../../adapters/prisma/prismaService'
import {jwtService} from '../jwt/jwt.service';
import { Response } from 'express';
import {
    parserPassword
} from "../../helpers/passwordEncrypt";
import {
    schemaAuthLogin
} from "./validateAuth";

@Controller('auth')
export class AuthController {
    constructor(
        private PrismaService:PrismaService, 
        private jwtService:jwtService
    ){}
    
    @Get("refreshtoken")
    async refreshtoken(@Req() req){
        const authorization=req.headers['authorization'] 
        if(!authorization){
            throw new HttpException({
                message:"El token es requerido",
                error:"Token requerido"
            },403);
        }
        const token = authorization.split(' ')[1];
        const user = this.jwtService.verify(token);
        const userData={
            id:user.id,
            name:user.name,
            email:user.email,
            roles:user.roles
        }
        const newToken =this.jwtService.sign(userData);
        return {
            user:userData,
            token:newToken
        }
    }
    @Post("login")
    async login(
        @Res() res:Response,
        @Body() body
    ){
        await schemaAuthLogin.validate(body, { abortEarly: false }).catch(error=>{
            res.status(400).json({
                message:error.errors[0]
            });
        });
        const password=await parserPassword(body.password);
        const userSearch =  await this.PrismaService.getOne({
            model:"User",
            where:{
                email:body.email,
                password:password
            }
        });
        if(userSearch.error){
            res.status(404).json(userSearch);
        }
        const user={
            id:userSearch.id,
            name:userSearch.name,
            email:userSearch.email,
            roles:["Admin"]
           }
        res.status(200).json({
           user,
           token:await this.jwtService.sign(user)
        });
    }
}
