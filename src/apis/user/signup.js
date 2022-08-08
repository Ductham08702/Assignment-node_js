import User from "../../models/user";
import bcrypt, { hash } from "bcrypt"


const signup = async(req, res) => {
    try {

        const checkEmail = await User.findOne({ email: req.body.email }).exec()
        if (checkEmail) {
            return res.status(400).json({
                message: "Email đã tồn tại!"
            })
        }

        // console.log(req.body.password)

        const salt = await bcrypt.genSalt(10);

        const pass = req.body.password
        const pass_hash = await bcrypt.hash(pass, salt);

        console.log(pass_hash)


        const user = {
            email: req.body.email,
            password: pass_hash
        }

        console.log(user)

        const new_user = await new User(user).save()

        return res.status(200).json({
            message: "Đăng ký tài khoản thành công!",
            new_user
        })

    } catch (error) {
        // return res.status(400).json({
        //     message: "Dang ky khong thanh cong",
        //     error,
        // });
    }
}


export default signup