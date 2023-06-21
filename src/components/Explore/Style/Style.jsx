import style from "./Style.module.scss";
import { NavLink } from "react-router-dom";

const Style = (props) => {
    return (
        <div>
            <NavLink to="/artists">
                <figure className={style.card}>
                    <img src={props.img} alt="style"/>
                    <figcaption>
                        <div className={style.info}>{props.styleName}</div>
                    </figcaption>
                </figure>
            </NavLink>
        </div>
    );
};

export default Style;