
import { Prisma } from '@prisma/client';

interface GetOneResponse {
    DNI: any;
    lastName: string;
    name: string;
    vaccines: any;
    aditionalInfo: any;
    recoveryCode: string;
    username: string;
    id: string;
    email:string;
    data: object | null;
    error: {
      message: string;
    } | null;
  }

interface IDeleteOne{
    model:Prisma.ModelName,
    id:number
}
interface IUpdateOne{
    model:Prisma.ModelName,
    body:object,
    id?:number,
    where?:object
}
interface ICreateOne{
    model:Prisma.ModelName,
    body:object
}
interface IGetPaginate{
    model:Prisma.ModelName,
    offset?:number,
    limit?:number
    includes?:string,
    where?:object,
    orderBy?:object
}
interface IWhereParam{
    OR?:Array<object>,
    AND?:Array<object>,
}
interface IGetOne{
    model:Prisma.ModelName,
    includes?:string,
    id?:number,
    where?:object
}
interface IGetAll{
    model:Prisma.ModelName,
    includes?:string,
    where?:object,
    selected?:string
}
  export interface PrismaServiceInteface {
    GetOneResponse,
    IDeleteOne,
    IUpdateOne,
    ICreateOne,
    IGetPaginate,
    IWhereParam,
    IGetOne,
    IGetAll
  }
  