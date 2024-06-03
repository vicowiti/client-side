

import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import { loginSchema } from '../validations/authValidations';
import { useFormik } from 'formik';
import { User } from '../types/global';
import axios from 'axios';
import { toast } from 'sonner';
import { BASE_URL } from '../utils/global';

const AuthForm = () => {
    const navigate = useNavigate()





    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: async (values, { resetForm }) => {
            try {

                const response = await axios.get(`${BASE_URL}/users`)
                const users: User[] = response.data

                const exists = users.find(item => item.email === values.email)

                if (exists) {
                    const validPassword = exists.password === values.password

                    if (validPassword) {
                        toast.success("Welcome " + exists.firstName)
                        navigate('/dashboard')
                        localStorage.setItem("ZERAKI_ADMIN", JSON.stringify(exists))
                    } else {
                        toast.error("Invalid Credentials")
                        resetForm()
                    }
                } else {
                    toast.error("Invalid Credentials")
                    resetForm()
                }

            } catch (err) {
                console.log(err)
                resetForm()
            }
        }
    })



    return (
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <Input touched={formik.touched.email} error={formik.errors.email} value={formik.values.email} onChange={formik.handleChange} type="email" label="Email Address" required={true} name="email" placeholder="Enter Your Email" />

            <Input value={formik.values.password} touched={formik.touched.password} error={formik.errors.password} onChange={formik.handleChange} type="password" label="Password " required={true} name="password" placeholder="Enter Your Password" />

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500 checked:fill-orange-600"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className={`font-medium text-[#2fa6de]`}>
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <Button label="Sign In" type="submit" />
            </div>
        </form>
    )
}

export default AuthForm