import style from "./Navigation.module.scss";
import user from "../../assets/user.jpg";
import "boxicons";

const Navigation = () => {
    return (
        <div className={style.nav_main}>
            <div className={style.menu}>
                <ul className={style.menu_items}>
                    <li className={style.menu_item}>
                        <box-icon type='logo' name='spotify' color='#ffffff'></box-icon>
                    </li>
                    <li className={style.menu_item}>
                        <a href="#" className={style.active}>Home</a>
                    </li>
                    <li className={style.menu_item}>
                        <a href="#">Explore</a>
                    </li>
                    <li className={style.menu_item}>
                        <a href="#">Playlists</a>
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