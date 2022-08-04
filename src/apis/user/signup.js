import User from "../../models/user";


const signup = async(req, res) => {
    try {

        const checkEmail = await User.findOne({ email: req.body.email }).exec()
        if (checkEmail) {
            return res.status(400).json({
                message: "Email đã tồn tại!"
            })
        }

        const new_user = await new User(req.body).save()
        return res.status(200).json({
            message: "Đăng ký tài khoản thành công!",
            new_user
        })

    } catch (error) {
        return res.status(400).json({
            message: "Dang ky khong thanh cong",
            error,
        });
    }
}


export default signup