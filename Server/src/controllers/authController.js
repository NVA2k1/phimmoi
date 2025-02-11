import User from "../models/users.js";
import bcrypt from "bcryptjs";
import { registerSchema } from "../validations/authValid.js";
import generateTokenAndSetCookie from "../../until/gennerateToken.js";
import sendMail from "../../until/sendMail.js"; // Import hàm gửi mail

export const register = async (req, res) => {
  try {
    const { email, password, fullName } = req.body; // Giả sử có trường fullName
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }

    const checkEmail = await User.findOne({ email });
    console.log("Kiểm tra email:", checkEmail); // Kiểm tra giá trị trả về
    if (checkEmail) {
      return res.status(400).json({
        message: "Email đã tồn tại!",
      });
    }

    const hashNewPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      ...req.body,
      avatar: "http://localhost:8081/upload/avatar/avatar.png",
      password: hashNewPassword,
    });
    user.password = undefined;

    // Gửi email xác nhận đăng ký thành công
    const emailSubject = "Chào mừng bạn đến với Phimmoi";
    const emailText = `Xin chào ${fullName || "bạn"},\n\nCảm ơn bạn đã đăng ký tài khoản tại Phimmoi.`;
    const emailHtml = `
      <h1>Xin chào ${fullName || "bạn"},</h1>
      <p>Cảm ơn bạn đã đăng ký tài khoản tại <b>Phimmoi</b>. Chúng tôi hy vọng bạn sẽ có trải nghiệm thú vị!</p>
    `;

    await sendMail(email, emailSubject, emailText, emailHtml);

    generateTokenAndSetCookie(user._id, res);
    return res.status(200).json({
      message: "Đăng ký thành công! Vui lòng kiểm tra email để biết thêm thông tin.",
      datas: user,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      message: "Lỗi máy chủ. Vui lòng thử lại sau.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await User.findOne({ email });
    if (!checkEmail) {
      return res.status(400).json({
        message: "Email không đúng!",
      });
    }

    const checkPassword = await bcrypt.compare(password, checkEmail.password);
    if (!checkPassword) {
      return res.status(400).json({
        message: "Mật khẩu không đúng!",
      });
    }

    console.log("Generating token and setting cookie...");
    generateTokenAndSetCookie(checkEmail._id, res);
    checkEmail.password = undefined;

    return res.status(200).json({
      message: "Đăng nhập thành công",
      data: checkEmail,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    console.log("Cookie cleared");
    return res.status(200).json({ message: "Đăng xuất thành công" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};

export const allowAccess = async (req, res) => {
  try {
    if (req.user) {
      return res.status(200).json({ message: "Chấp nhận truy cập" });
    }

    return res.status(403).json({ message: "Chưa đủ tư cách!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
