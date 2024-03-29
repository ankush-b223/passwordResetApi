const nodemailer =  require("nodemailer");

const sendEmail = async (email, subject , text) =>{

    try{

        const transporter = nodemailer.createTransport({

            host: process.env.HOST,
            service: process.env.SERVICE,
            port:587,
            secure:true,
            transportMethod: 'SMTP',
            auth:{
                user: process.env.USER,
                pass: process.env.PASS,
            },

        });

     

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });

        console.log("Email Sent succesfully");



    }catch(error){
        console.log(error,"email not sent! ");
    }

}



module.exports = sendEmail;