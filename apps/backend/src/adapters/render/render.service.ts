  import { HttpException, Injectable } from '@nestjs/common';
  import * as fs from "fs"; 
  import { PrismaService } from '../prisma/prisma.service';
  import moment from 'moment';
  @Injectable()
  export class RenderService {
    async templateUseData(data:object,template:string):Promise<{html:string}>{
        const directoryPath= `apps/backend/src/adapters/render/html/${template}.html`;
        try {
          let html = await fs.promises.readFile(directoryPath, 'utf8');
          const parseHtml=await this.parseHtmlData(data,html);
          if(!parseHtml){
            throw new HttpException({
              "message":"El template no pudo encontrarse",
              "directoryPath":directoryPath
            },400);
          }
          html=parseHtml.html;
          return {
            html
          };
        } catch (error) {
          throw new HttpException({
            "message":error.message,
            "directorio":directoryPath
          },400);
        }
      }
      async parseHtmlData(data:object,html:string):Promise<{html:string}>{
        for (const key in data) {
            const placeholder = `{{${key}}}`;
            const value = data[key];
            html = html.split(placeholder).join(value);
    
            const placeholder2 = `{${key}}`;
            html = html.split(placeholder2).join(value);
        }
        return {html};
      }
  }