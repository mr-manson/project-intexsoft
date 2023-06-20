import style from "./Lyrics.module.scss";
import { BiMicrophone } from "react-icons/bi";

const Lyrics = (props) => {

    const showLyricsText = () => {
        props.setShowLyrics(prev => !prev);
    }

    return (
        <>
            <div className={style.lyrics} onClick={showLyricsText}>
                <div className={style.microphone_icon}><BiMicrophone/></div>
                <p className={style.icon_text}>Show lyrics</p>
            </div>
            <div className={`${style.lyrics_text} ${props.showLyrics ? "" : style.hide}`}>
                <div className={style.lyrics_close} onClick={showLyricsText} >×</div>
                <pre>{props.lyrics ? props.lyrics : "No Lyrics"}</pre>
            </div>
        </>
    );
};

export default Lyrics;