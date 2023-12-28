import nodemailer from "nodemailer"
const sendEmail = async function (email, subject, message) {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.HOST,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        const info = transporter.sendMail({
            from: process.env.SMTP_FROM_EMAIL,
            to: `${email}`,
            subject: subject,
            html: `${message}`
        })

        return info;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export default sendEmail;