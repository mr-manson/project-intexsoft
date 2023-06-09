import { useRef, useState } from "react";
import style from "./Player.module.scss";
import { BsFastForwardFill, BsList, BsPauseCircle, BsPlayCircle, BsRepeat, BsRewindFill } from "react-icons/bs";
import { BiDownload, BiFullscreen } from "react-icons/bi";
import { SiDiscogs } from "react-icons/si";
import { formatTime } from "../../tools/tools";
import Cover from "./Cover/Cover";
import Volume from "./Volume/Volume";
import Lyrics from "./Lyrics/Lyrics";

const Player = (props) => {

    const audio = useRef();
    const progress = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showLyrics, setShowLyrics] = useState(false);

    const currentProgress = (current / duration) * 100;

    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    let trackId = props.playlist[index].link;
    const trackLink = `${link}${trackId}`;

    /*--BUTTONS-------------------------------------------------*/

    const timeUpdate = () => {
        setDuration(audio?.current?.duration);
        setCurrent(audio?.current?.currentTime);
    }

    const play = () => {
        if (isPlaying) {
            setTimeout(() => {
                audio?.current?.play();
            }, 100);
        }
    };

    const togglePlay = () => {
        if (!isPlaying) {
            audio?.current?.play();
        } else {
            audio?.current?.pause();
        }
        setIsPlaying(prev => !prev);
    };

    const toggleFastForward = () => {
        if (index >= props.playlist.length - 1) {
            setIndex(0);
            trackId = props.playlist[0];
            play();
        } else {
            setIndex(prev => prev + 1);
            trackId = props.playlist[index];
            play();
        }
        setShowLyrics(false);
    }

    const toggleRewind = () => {
        if (index <= 0) {
            setIndex(props.playlist.length - 1);
            trackId = props.playlist[index];
        } else {
            setIndex(prev => prev - 1);
            trackId = props.playlist[index];
        }
        play();
        setShowLyrics(false);
    }

    const setProgress = (e) => {
        const progressWidth = progress?.current?.clientWidth;
        const clickPosition = e.nativeEvent.offsetX;
        audio.current.currentTime = clickPosition / progressWidth * duration;
    }

    /*--/BUTTONS------------------------------------------------*/

    return (
        <section className={style.player}>
            <audio ref={audio} src={trackLink} onEnded={toggleFastForward} onTimeUpdate={timeUpdate}/>
            <nav className={style.nav_player}>
                <div className={style.nav_player_left_items}>
                    <div className={style.nav_player_item_link}> {/*TODO переделать структуру кнопки*/}
                        <SiDiscogs className={style.disc_icon}/>
                        <p className={style.icon_text}>Discogs</p>
                    </div>
                </div>
                <div className={style.nav_player_right_items}>
                    <div className={style.nav_player_item_link}>
                        <BiFullscreen className={style.fullscreen_icon}/>
                    </div>
                </div>
            </nav>
            <div className={style.main_player}>
                <div className={style.main_player_status}>Now playing</div>
                <Cover/>
                <div className={style.main_player_info}>
                    <div className={style.main_player_info_track}>{props.playlist[index].title}</div>
                    <div className={style.main_player_info_artist}>Beck</div>
                </div>
                <div className={style.main_player_progress}>
                    <div className={style.start}>{formatTime(current)}</div>
                    <div className={style.progress_container} ref={progress} onClick={setProgress}>
                        <div className={style.progress_bar} style={{width: `${currentProgress}%`}}></div>
                    </div>
                    <div className={style.finish}>{formatTime(duration - current)}</div>
                </div>
                <div className={style.main_player_controls}>
                    <div className={style.repeat_icon}><BsRepeat/></div>
                    <div className={style.rewind_icon} onClick={toggleRewind}><BsRewindFill/></div>
                    <div className={style.play_icon} onClick={togglePlay}>
                        {isPlaying ? <BsPauseCircle/> : <BsPlayCircle/>}</div>
                    <div className={style.forward_icon} onClick={toggleFastForward}><BsFastForwardFill/></div>
                    <div className={style.playlist_icon}><BsList/></div>
                </div>
                <div className={style.main_player_tools}>
                    <Volume audio={audio}/>
                    <Lyrics lyrics={props.playlist[index].lyrics} showLyrics={showLyrics} setShowLyrics={setShowLyrics} />
                </div>
            </div>
        </section>
    )
}

export default Player;