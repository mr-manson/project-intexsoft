import style from "./Login.module.scss";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { authAPI } from "../../api/auth-api";
import { useState } from "react";
/*import { useDispatch } from "react-redux";
import { signUp } from "../../store/auth-reducer";*/

const Login = (props) => {
/*    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(signUp());
    }, [dispatch])*/

    const [signInActive, setSignInActive] = useState(true);
    const [signUpActive, setSignUpActive] = useState(false);

    const formToggle = () => {
        setSignInActive(prev => !prev);
        setSignUpActive(prev => !prev);
    }

    const validationSchema = yup.object().shape({
        email: yup.string().required("required").email("wrong format"),
        password: yup.string().required("required"),
    });

    return (
        <div className={`${style.login_modal_container} ${props.showLogin ? "" : style.hide}`}>
            <div className={style.form_wrapper}>
                <div className={style.form_box}>
                    <div className={style.form_close} onClick={props.showLoginBox}>×</div>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{email: "", password: ""}}
                        onSubmit={(values) => {
                            authAPI.signIn(values.email, values.password);
                            console.log(values.email);
                        }}>
                        {({errors, touched}) => (
                            <Form className={`${style.form_signin} ${signInActive ? style.active : ""}`}>
                                <div className={style.form_title}>Sign In</div>
                                <div className={style.form_item}>
                                    <Field className={style.field} name={"email"} component={"input"} type={"text"}
                                           placeholder=" " />
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
                                <div className={style.signup_link} onClick={formToggle}>Don't have an account? <span>Sign up</span>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{email: "", password: ""}}
                        onSubmit={(values) => {
                            authAPI.signUp(values.email, values.password);
                            console.log(values.email);
                        }}>
                        {({errors, touched}) => (
                            <Form className={`${style.form_signup} ${signUpActive ? style.active : ""}`}>
                                <div className={style.form_title}>Sign Up</div>
                                <div className={style.form_item}>
                                    <Field className={style.field} name={"email"} component={"input"} type={"text"}
                                           placeholder=" "/>
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
                                <div className={style.signup_link} onClick={formToggle}>Already registered? <span>Sign in</span>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    );
};

export default Login;