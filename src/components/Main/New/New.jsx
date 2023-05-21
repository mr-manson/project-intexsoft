import style from "./New.module.scss";
import vinyl from "../../../assets/vinyl.svg";
import new_01 from "../../../assets/new-01.webp";
import new_02 from "../../../assets/new-02.webp";
import new_03 from "../../../assets/new-03.webp";
import {BsPlayCircle} from "react-icons/bs";

const New = () => {
    return (
        <div className={style.new_items}>
            <div className={style.new_item}>
                <div className={style.album_pack}>
                    <img className={style.vinyl} src={vinyl} alt="vinyl"/>
                    <img
                        className={style.cover}
                        src={new_01}
                        alt={style.cover}
                    />
                </div>
                <div className={style.new_item_playbtn}>
                    <a href="#" className={style.play}><BsPlayCircle className={style.play_icon} /></a>
                </div>
                <div className={style.new_item_content}>
                    <div className={style.new_item_content_title}>One Love</div>
                    <div className={style.new_item_content_text}>
                        The best in old & new Reggae
                    </div>
                    <div className={style.new_item_content_stats}>
                        <i className="bx bxl-spotify"></i> Spotify - 2 075 767 likes - 110
                        tracks, 7h 12m
                    </div>
                </div>
            </div>

            <div className={`${style.new_item} ${style.active}`}>
                <div className={style.album_pack}>
                    <img className={style.vinyl} src={vinyl} alt="vinyl"/>
                    <img
                        className={style.cover}
                        src={new_02}
                        alt="cover"
                    />
                </div>
                <div className={style.new_item_playbtn}>
                    <a href="#" className={style.play}><BsPlayCircle className={style.play_icon} /></a>
                </div>
                <div className={style.new_item_content}>
                    <div className={style.new_item_content_title}>
                        Best Indie of 2022
                    </div>
                    <div className={style.new_item_content_text}>
                        Our editorial picks of this year's best indie songs.
                        #SpotifyWrapped
                    </div>
                    <div className={style.new_item_content_stats}>
                        <i className="bx bxl-spotify"></i> Spotify - 59 737 likes - 75
                        tracks, 4h 19m
                    </div>
                </div>
            </div>

            <div className={style.new_item}>
                <div className={style.album_pack}>
                    <img className={style.vinyl} src={vinyl} alt="vinyl"/>
                    <img
                        className={style.cover}
                        src={new_03}
                        alt="cover"
                    />
                </div>
                <div className={style.new_item_playbtn}>
                    <a href="#" className={style.play}><BsPlayCircle className={style.play_icon} /></a>
                </div>
                <div className={style.new_item_content}>
                    <div className={style.new_item_content_title}>Fresh Finds Rock</div>
                    <div className={style.new_item_content_text}>
                        Fresh rock from independent artists every Wednesday
                    </div>
                    <div className={style.new_item_content_stats}>
                        <i className="bx bxl-spotify"></i> Spotify - 116 972 likes - 100
                        tracks, 5h 26m
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;