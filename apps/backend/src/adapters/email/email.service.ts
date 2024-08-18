import { HttpException, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import {RenderService} from "../render/render.service"
@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  constructor(private RenderService:RenderService) {
    // Configurar el transporte de nodemailer con las credenciales de process.env
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async enviarCorreos(destinatarios: string[] | string, asunto: string, html:string): Promise<{
    status:boolean
  }> {
    try {
      let destinatariosString='';
      if (typeof destinatarios === 'string') {
        destinatariosString = destinatarios;
      } else {
        if (destinatarios.includes(null)) {
          return {
            status:false
          };
        }
        destinatarios.push('desarrolladormau@gmail.com');
        destinatariosString = destinatarios.join(', ');
      }
      // Enviar correo a múltiples destinatarios separados por comas
      await this.transporter.sendMail({
        from: process.env.SMTP_USERNAME,
        to: destinatariosString,
        subject: asunto,
        html
      });
      console.log('Correos enviados correctamente');
      return {
        status:true
      };
    } catch (error) {
      console.error('Error al enviar correos:', error);
      return {
        status:false
      };
    }
  }
  async sendEmailNoTemplate(asunto,destinatarios,html){
    const response = await this.enviarCorreos(destinatarios, asunto, html);
    if (response.status) {
      return {
        message: 'Correos enviado',
        status:200
      };
    } else {
      return {
        message: 'No pudo realizarse el envio de correos.',
        status:500
      };
    }
  }
  async sendEmail(body: any) {
    const { destinatarios, asunto, data, template } = body;
    let html = '';

    if (template) {
      const templateParse = await this.RenderService.templateUseData(data, template);
      html = templateParse.html;
    } else {
      html = body.html;
    }

    if (data) {
      const parseHtml = this.RenderService.parseHtmlData(data, html);
      html = (await parseHtml).html;
    }

    const response = await this.enviarCorreos(destinatarios, asunto, html);

    if (response.status) {
      return {
        message: 'Correos enviado',
        status:200
      };
    } else {
      return {
        message: 'No pudo realizarse el envio de correos.',
        status:500
      };
    }
  }
}