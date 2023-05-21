import style from "./Navigation.module.scss";
import user from "../../assets/user.jpg";
import "boxicons";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className={style.nav_main}>
            <div className={style.menu}>
                <ul className={style.menu_items}>
                    <li className={style.menu_item}>
                        <box-icon type='logo' name='spotify' color='#ffffff'></box-icon>
                    </li>
                    <li className={style.menu_item}>
                        <Link to="/" className={style.active}>Home</Link>
                    </li>
                    <li className={style.menu_item}>
                        <Link to="/explore">Explore</Link>
                    </li>
                    <li className={style.menu_item}>
                        <Link to="/playlists">Playlists</Link>
                    </li>
                </ul>
            </div>
            <div className={style.search}>
                <box-icon name='search' color='#ffffff'></box-icon>
                <p className={style.icon_text}>Search</p>
            </div>
            <div className={style.user}>
                <a href="#" className={style.user}>
                    <img src={user} alt="user"/>
                    <box-icon name='down-arrow' type='solid' color='#ffffff'></box-icon>
                </a>
            </div>
        </div>
    )
}

export default Navigation;