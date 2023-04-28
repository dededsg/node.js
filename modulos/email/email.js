var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "develinsouzag@gmail.com",
    pass: "ikvgjaqpfocgaxgb",
  },
});


var mailOptions = {
  from: "develinsouzag@gmail.com",
  to: "gustavocrispimtec@gmail.com",
  subject: "Sending Email using Node.js",
  text: "",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
