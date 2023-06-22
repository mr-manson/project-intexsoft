import style from "./Style.module.scss";
import { NavLink } from "react-router-dom";

const Style = (props) => {

    return (
        <div>
            <NavLink to={"/artists/" + props.style.id} >
                <figure className={style.card}>
                    <img src={props.style.img} alt="style"/>
                    <figcaption>
                        <div>{props.style.name}</div>
                    </figcaption>
                </figure>
            </NavLink>
        </div>
    );
};

export default Style;