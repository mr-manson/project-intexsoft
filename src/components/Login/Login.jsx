import style from "./Login.module.scss";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";


const Login = (props) => {
    const validationSchema = yup.object().shape({
        email: yup.string().required("required").email("wrong format"),
        password: yup.string().required("required"),
    });

    return (
        <div className={`${style.login_modal_container} ${props.showLogin ? "" : style.hide}`}>
            <div className={style.form_box}>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{email: "", password: ""}}
                    onSubmit={values => console.log(values)}>
                    {({errors, touched}) => (
                        <Form>
                            <div className={style.form_item}>
                                <label htmlFor={"email"}>e-mail</label><br/>
                                <Field className={style.field} name={"email"} component={"input"} type={"text"}/>
                                {errors.email && touched.email && (
                                    <div>{errors.email}</div>
                                )}
                            </div>
                            <div className={style.form_item}>
                                <label htmlFor={"password"}>password</label><br/>
                                <Field className={style.field} name={"password"} component={"input"} type={"password"}/>
                                {errors.password && touched.password && (
                                    <div>{errors.password}</div>
                                )}
                            </div>
                            <div className={style.form_btn}>
                                <button type={"submit"}>Send</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;