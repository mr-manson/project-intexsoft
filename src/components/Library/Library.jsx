import style from "./Library.module.scss";
import { useSelector } from "react-redux";

const Library = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);

    return(
        <div className={style.library_wrapper} >
            {isAuth ? "here is my huge library" : "you must be logged in to create a library" }


        </div>
    )
}

export default Library;