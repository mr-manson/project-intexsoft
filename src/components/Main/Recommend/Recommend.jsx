import style from "./Recommend.module.scss";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import recommend_bg from "./../../../assets/recommend/recommend-bg.webp";

const Recommend = () => {
    return(
        <div className={style.recommend}>
            <div className={style.recommend_title}>
                Recommended playlists
                <BsCaretLeft className={style.arrow_icon}/>
                <BsCaretRight className={style.arrow_icon}/>
            </div>
            <div className={style.recommend_items}>
                <div className={style.recommend_item}>
                    <div className={style.title}>Playlist</div>
                </div>
                <div className={style.recommend_item}>
                    <div className={style.title}>Playlist</div>
                </div>
                <div className={style.recommend_item}>
                    <div className={style.title}>Playlist</div>
                </div>
            </div>
        </div>
    )
}

export default Recommend;