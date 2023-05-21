import style from "./Navigation.module.scss";
import user from "../../assets/user.webp";
import { Link, NavLink } from "react-router-dom";
import { BsSpotify, BsSearch, BsFillCaretDownFill } from "react-icons/bs";

const Navigation = () => {
    return (
        <div className={style.nav_main}>
            <div className={style.menu}>
                <ul className={style.menu_items}>
                    <li className={style.menu_item}>
                        <BsSpotify className={style.logo_icon}/>
                    </li>
                    <li className={style.menu_item}>
                        <NavLink to="/" className={({isActive}) => isActive ? style.active : ""}>Home</NavLink>
                    </li>
                    <li className={style.menu_item}>
                        <NavLink to="/explore" className={({isActive}) => isActive ? style.active : ""}>My
                            Library</NavLink>
                    </li>
                    <li className={style.menu_item}>
                        <NavLink to="/playlists"
                                 className={({isActive}) => isActive ? style.active : ""}>Playlists</NavLink>
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