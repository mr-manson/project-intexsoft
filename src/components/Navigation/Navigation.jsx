import style from "./Navigation.module.scss";
/*import user from "../../assets/user.webp";*/
import { NavLink } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import Login from "../Login/Login";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navigation = () => {
    const [showLogin, setShowLogin] = useState(false);
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const email = useSelector(state => state.authReducer.email);
    const userName = email.split("@")[0];

    const showLoginBox = () => {
        setShowLogin(prev => !prev);
    }

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
                        <NavLink to="/explore"
                                 className={({isActive}) => isActive ? style.active : ""}>Explore</NavLink>
                    </li>
                    <li className={style.menu_item}>
                        <NavLink to="/library" className={({isActive}) => isActive ? style.active : ""}>My
                            Library</NavLink>
                    </li>
                    <li className={style.menu_item}>
                        <NavLink to="/test"
                                 className={({isActive}) => isActive ? style.active : ""}>Test</NavLink>
                    </li>
                </ul>
            </div>
            {/*<div className={style.search}>
                <BsSearch className={style.search_icon}/>
                <p className={style.icon_text}>Search</p>
            </div>*/}
            <div className={style.menu_login}>{!isAuth
                ? <div onClick={showLoginBox}>Login</div>
                : <div>{userName}</div>
            }
            </div>
            <Login showLogin={showLogin} showLoginBox={showLoginBox}/>

            {/*<div className={style.user}>
                <div className={style.user_box}>
                    <img src={user} alt="user"/>
                    <BsFillCaretDownFill className={style.user_icon}/>
                </div>
            </div>*/}
        </div>
    )
}

export default Navigation;