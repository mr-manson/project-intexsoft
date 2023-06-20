import style from "./Style.module.scss";
import { NavLink } from "react-router-dom";

const Style = (props) => {
    return (
        <div>
            <NavLink to="/artists">
                <div className={style.style_box}>
                    <div className={style.style_name}>
                        {props.styleName}
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Style;