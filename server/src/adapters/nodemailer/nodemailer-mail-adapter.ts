import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2e53a0d8267b60",
        pass: "c69e40a761c0bd"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject,body}: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <suporte@feedget.com>',
        to: 'Joao Dev <joao@email.com>',
        subject,
        html: body
    })
    }
}