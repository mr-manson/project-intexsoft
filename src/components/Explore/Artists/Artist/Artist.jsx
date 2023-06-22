import style from "./Artist.module.scss";
import { NavLink } from "react-router-dom";

const Artist = (props) => {

    return (
        <NavLink to={"/albums/" + props.artist.id}>
        <figure className={style.card}>
                <img src={props.artist.img} alt="style"/>
                <figcaption>
                    <div>{props.artist.name}</div>
                </figcaption>
            </figure>
        </NavLink>
    );
};

export default Artist;