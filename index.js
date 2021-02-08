const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')

const PORT = process.env.PORT || 3000

// Create a new express application instance
const app = express()

// Call midlewares
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

app.post('/send-email', (req, res) => {
    const { email, message } = req.body

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        res.status(400).send({
            success: false,
            errors: [
                {
                    message: 'Envie um e-mail válido',
                },
            ],
        })
        return
    }

    if (!message || !message.length) {
        res.status(400).send({
            success: false,
            errors: [
                {
                    message: 'Envie uma mensagem válida',
                },
            ],
        })
        return
    }

    const nodemailer = require('nodemailer')

    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'naoresponda.qualybrasil@gmail.com',
            pass: 'qualybrasilapp@10',
        },
    })

    let pastParams = {}
    if (message.indexOf('<') !== -1) {
        pastParams = {
            html: message,
        }
    } else {
        pastParams = {
            text: message, // Plain text body
        }
    }

    transport.sendMail(
        {
            from: 'naoresponda.qualybrasil@gmail.com', // Sender address
            to: email, // List of recipients
            subject: 'Coleta realizada - QualyBrasil Lavanderia', // Subject line
            ...pastParams,
        },

        function (err, info) {
            if (err) {
                res.status(400).send({
                    success: false,
                    errors: [
                        {
                            code: err.code,
                            systemMessage: err.message,
                            systemMessage2: err,
                        },
                    ],
                })
            } else {
                res.status(200).send({
                    success: true,
                    message: `E-mail enviado!`,
                })
            }
        }
    )
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`)
})
