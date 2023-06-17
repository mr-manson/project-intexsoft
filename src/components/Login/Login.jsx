import style from "./Login.module.scss";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { userAPI } from "../../api/auth-api";
import { useState } from "react";

const Login = (props) => {
    const [isSignIn, setIsSignIn] = useState(false);

    const validationSchema = yup.object().shape({
        email: yup.string().required("required").email("wrong format"),
        password: yup.string().required("required"),
    });

    return (
        <div className={`${style.login_modal_container} ${props.showLogin ? "" : style.hide}`}>
            <div className={style.form_wrapper}>
                <div className={style.form_box}>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{email: "", password: ""}}
                        onSubmit={(values) => {
                            userAPI.signIn(values.email, values.password);
                            console.log(values.email);
                        }}>
                        {({errors, touched}) => (
                            <Form className={style.form}>
                                <div className={style.form_title}>Sign In</div>
                                <div className={style.form_item}>
                                        <Field className={style.field} name={"email"} component={"input"} type={"text"} placeholder=" "/>
                                    <label className={style.label} htmlFor={"email"}>e-mail</label><br/>
                                    {errors.email && touched.email && (
                                        <div className={style.form_error}>{errors.email}</div>
                                    )}
                                </div>
                                <div className={style.form_item}>
                                    <Field className={style.field} name={"password"} component={"input"}
                                           type={"password"} placeholder=" "/>
                                    <label className={style.label} htmlFor={"password"}>password</label><br/>
                                    {errors.password && touched.password && (
                                        <div className={style.form_error}>{errors.password}</div>
                                    )}
                                </div>
                                    <button className={style.form_btn} type={"submit"}>Send</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;