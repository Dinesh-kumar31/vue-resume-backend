const nodemailer = require("nodemailer");




async function sendResumeToMail(req, res){
    try {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "dinesh.personal.projects@gmail.com",
            pass: "zrwpqamyocugcizd",
          },
        });
        const reqData = req.body;
        let pdfDataUri = reqData.pdfString
        let pdfBuffer = Buffer.from(pdfDataUri.split(",")[1], "base64");
       
        let mailOptions = {
          from: "dinesh.personal.projects@gmail.com",
          to: reqData.toMailId,
          subject: "Your Resume",
          text: "Hi, This is your created Resume",
          attachments: [
            {
              filename: "Resume.pdf",
              content: pdfBuffer,
            },
          ],
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res.json({ status: 400, message: "Mail not send" });
          } else {
            res.json({
              status: 200,
              message: "Mail Send Successfully",
              data: info,
            });
          }
        });
      } catch (error) {
        res.json({ status: 500, message: "Unable to connect" }); 
      }
}

module.exports = {
    sendResumeToMail
}