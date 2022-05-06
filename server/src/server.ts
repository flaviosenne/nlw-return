import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2e53a0d8267b60",
        pass: "c69e40a761c0bd"
    }
});

app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const feedback = await prisma.feedback.create({
        data: {
            comment, type, screenshot
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <suporte@feedget.com>',
        to: 'Joao Dev <joao@email.com>',
        subject: 'Novo Feedback',
        html: [
            '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            '</div>',
        ].join('\n')
    })

    return res.status(201).json({ data: feedback })
})

app.listen(3333, () => console.info('HTTP server running...'))