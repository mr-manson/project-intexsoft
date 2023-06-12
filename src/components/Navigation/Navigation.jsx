import style from "./Navigation.module.scss";
/*import user from "../../assets/user.webp";*/
import { NavLink, useNavigate } from "react-router-dom";
import { BsCaretLeft, BsCaretRight, BsSpotify } from "react-icons/bs";
import Login from "../Login/Login";
import { useState } from "react";

const Navigation = () => {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goForward = () => navigate(+1);


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
                    <li>
                        <div className={style.history_block}>
                            <div onClick={goBack}>
                                <BsCaretLeft className={style.arrow_icon}/>
                            </div>
                            <div onClick={goForward}>
                                <BsCaretRight className={style.arrow_icon}/>
                            </div>
                        </div>
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
            <div className={style.menu_login}>
                <p onClick={showLoginBox}>Login</p>
            </div>
            <Login showLogin={showLogin}/>
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