import dotenv from 'dotenv';
import nodemailer from "nodemailer";

dotenv.config();

const sendMail = async (to, subject, text, html) => {
  try {
    // Tạo transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Cấu hình email
    const mailOptions = {
      from: `"Phimmoi" <${process.env.EMAIL_USER}>`, // Sử dụng email từ biến môi trường
      to,
      subject,
      text,
      html,
    };

    // Gửi email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email đã được gửi thành công:", info.response);
    return info;

  } catch (error) {
    console.error("Lỗi khi gửi email:", error);
    throw new Error("Không thể gửi email. Vui lòng thử lại sau.");
  }
};

export default sendMail;