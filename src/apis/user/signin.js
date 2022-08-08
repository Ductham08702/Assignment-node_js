import User from "../../models/user";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt"


const signin = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec()


        if (!user) {
            return res.status(400).json({
                messenger: "Email không tồn tại!"
            })
        }

        const pass = req.body.password
        const pass_user = user.password

        console.log(pass)
        console.log(pass_user)


        // bcrypt.compare(pass.toString(), pass_user, (err, res) => {
        //     console.log(err)
        //     console.log(res)
        // })


        bcrypt.compare(pass_user, pass, (err, res) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(res) //true or false
        })


        const token = jwt.sign({ id: user._id }, "123456", { expiresIn: 60 * 60 })
        return res.status(200).json({
            token,
            user: {
                password: user.password,
                id: user._id,
                email: user.email,
            },
        });

    } catch (error) {

    }
}

export default signin