import style from "./Artists.module.scss";
import { NavLink } from "react-router-dom";

const Artists = () => {
    return (
        <div className={style.artists_wrapper}>
            {/*<NavLink to="/style" className={({isActive}) => isActive ? style.active : ""}>!!!< /NavLink>*/}
                <div>
                    ROCK
                </div>

        </div>
    );
};

export default Artists;