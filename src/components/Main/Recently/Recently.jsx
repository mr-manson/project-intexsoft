import style from "./Recently.module.scss";
import noel_gallagher from "./../../../assets/recent/noel_gallagher.webp";
import yuna_zarai from "./../../../assets/recent/yuna_zarai.webp";
import this_is_where_death_begins from "./../../../assets/recent/this_is_where_death_begins.webp";
import multfilms from "./../../../assets/recent/multfilms.webp";
import coding_mode from "./../../../assets/recent/coding_mode.webp";
import { BsCaretLeft, BsCaretRight, BsDisc, BsPerson, BsList } from "react-icons/bs";

const Recently = () => {
    return (
        <div className={style.recently}>
            <div className={style.recently_title}>
                Recently listened
                <BsCaretLeft className={style.arrow_icon}/>
                <BsCaretRight className={style.arrow_icon}/>
            </div>
            <div className={style.recently_items}>
                <div className={`${style.recently_item} ${style.artist}`}>
                    <img src={noel_gallagher} alt="artist"/>
                    <div className={style.type}>
                        <BsPerson className={style.artist_icon}/>
                        <div>Artist</div>
                    </div>
                    <div className={style.name}>Noel Gallagher</div>
                </div>
                <div className={`${style.recently_item} ${style.artist}`}>
                    <img src={yuna_zarai} alt="artist"/>
                    <div className={style.type}>
                        <BsPerson className={style.artist_icon}/>
                        <div>Artist</div>
                    </div>
                    <div className={style.name}>Yuna</div>
                </div>
                <div className={`${style.recently_item} ${style.album}`}>
                    <img src={this_is_where_death_begins} alt="artist"/>
                    <div className={style.type}>
                        <BsDisc className={style.album_icon}/>
                        <div>Album</div>
                    </div>
                    <div className={style.title}>This Is Where Death Begins</div>
                    <div className={style.name}>by Combichrist</div>
                </div>
                <div className={`${style.recently_item} ${style.album}`}>
                    <img src={multfilms} alt="artist"/>
                    <div className={style.type}>
                        <BsDisc className={style.album_icon}/>
                        <div>Album</div>
                    </div>
                    <div className={style.title}>МультFильмы</div>
                    <div className={style.name}>by МультFильмы</div>
                </div>
                <div className={`${style.recently_item} ${style.album}`}>
                    <img src={coding_mode} alt="artist"/>
                    <div className={style.type}>
                        <BsList className={style.album_icon}/>
                        <div>Playlist</div>
                    </div>
                    <div className={style.title}>Coding Mode</div>
                </div>
            </div>
        </div>

    )
}

export default Recently;
