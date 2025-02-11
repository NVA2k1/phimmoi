const isAdmin = (req, res, next) => {
  try {
    // Kiểm tra xem người dùng có đăng nhập hay không
    if (!req.user) {
      return res
        .status(401)
        .json({ error: "Không có quyền truy cập - Người dùng chưa được xác thực!" });
    }

    // Kiểm tra xem người dùng có phải là admin hay không
    if (!req.user.isAdmin) {
      return res
        .status(403)
        .json({ error: "Không có quyền truy cập - Yêu cầu quyền quản trị viên!" });
    }

    // Nếu tất cả điều kiện được đáp ứng, tiếp tục xử lý
    next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Đã xảy ra lỗi máy chủ - " + err.message });
  }
};

export default isAdmin;
