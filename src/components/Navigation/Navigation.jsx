import style from "./Navigation.module.scss";
import user from "../../assets/user.webp";
import { Link } from "react-router-dom";
import {BsSpotify, BsSearch, BsFillCaretDownFill} from "react-icons/bs";

const Navigation = () => {
    return (
        <div className={style.nav_main}>
            <div className={style.menu}>
                <ul className={style.menu_items}>
                    <li className={style.menu_item}>
                        <BsSpotify className={style.logo_icon} />
                    </li>
                    <li className={style.menu_item}>
                        <Link to="/" className={style.active}>Home</Link>
                    </li>
                    <li className={style.menu_item}>
                        <Link to="/explore">My Library</Link>
                    </li>
                    <li className={style.menu_item}>
                        <Link to="/playlists">Playlists</Link>
                    </li>
                </ul>
            </div>
            <div className={style.search}>
                <BsSearch className={style.search_icon}/>
                <p className={style.icon_text}>Search</p>
            </div>
            <div className={style.user}>
                <a href="#" className={style.user}>
                    <img src={user} alt="user"/>
                    <BsFillCaretDownFill className={style.user_icon}/>
                </a>
            </div>
        </div>
    )
}

export default Navigation;