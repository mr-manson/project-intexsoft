import { useEffect, useRef, useState } from "react";
import style from "./Player.module.scss";
import { BsFastForwardFill, BsList, BsPauseCircle, BsPlayCircle, BsRepeat, BsRewindFill } from "react-icons/bs";
import { BiDevices, BiDownload, BiFullscreen, BiMicrophone, BiVolumeFull } from "react-icons/bi";
import { SiDiscogs } from "react-icons/si";
import { formatTime } from "../../tools/tools";
import Cover from "./Cover/Cover";

const Player = (props) => {

    const audio = useRef();
    const progress = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);

    const currentProgress = (current/duration) * 100;

    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    let trackId = props.playlist[index].link;
    const trackLink = `${link}${trackId}`;

    //console.log(progress?.current?.offsetWidth);

    /*--BUTTONS-------------------------------------------------*/

    useEffect(() => {
        if (isPlaying) {
            setInterval(() => {
                setDuration(audio?.current?.duration);
                setCurrent(audio?.current?.currentTime);
            }, 10);
        }
    }, [isPlaying, current, duration]);

    const play = () => {
        if (isPlaying) {
            setTimeout(() => {
                audio?.current?.play();
            }, 100);
        }
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
    }

    const togglePlay = () => {
        if (!isPlaying) {
            audio?.current?.play();
        } else {
            audio?.current?.pause();
        }
        setIsPlaying(prev => !prev);
    };

    const setProgress = (e) => {
        const progressWidth = progress?.current?.clientWidth;
        const clickPosition = e.nativeEvent.offsetX;
        audio.current.currentTime = clickPosition / progressWidth * duration;
    }

    /*--/BUTTONS------------------------------------------------*/

    return (
        <section className={style.player}>
            <audio ref={audio} src={trackLink}/>
            <nav className={style.nav_player}>
                <div className={style.nav_player_left_items}>
                    <div className={style.nav_player_item_link}> {/*TODO переделать структуру кнопки*/}
                        <SiDiscogs className={style.disc_icon}/>
                        <p className={style.icon_text}>Discogs</p>
                    </div>
                </div>
                <div className={style.nav_player_right_items}>
                    <div className={style.nav_player_item_link}>
                        <BiDownload className={style.download_icon}/>
                    </div>
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
                <div className={style.main_player_progress} >
                    <div className={style.start}>{formatTime(current)}</div>
                    <div className={style.progress_container} ref={progress} onClick={setProgress}>
                        <div className={style.progress_bar} style={{width: `${currentProgress}%`}}></div>
                    </div>
                    <div className={style.finish}>{formatTime(duration - current)}</div>
                </div>
                <div className={style.main_player_controls}>
                    <div><BsRepeat className={style.repeat_icon}/></div>
                    <div className={style.rewind_icon} onClick={toggleRewind}><BsRewindFill/></div>
                    <div className={style.play_icon} onClick={togglePlay}>
                        {isPlaying ? <BsPauseCircle/> : <BsPlayCircle/>}</div>
                    <div className={style.forward_icon} onClick={toggleFastForward}><BsFastForwardFill/></div>
                    <div><BsList className={style.playlist_icon}/></div>
                </div>
                <div className={style.main_player_tools}>
                    <div><BiDevices className={style.devices_icon}/></div>
                    <div className={style.lyrics}><BiMicrophone className={style.microphone_icon}/>
                        <p className={style.icon_text}>Show lyrics</p>
                    </div>
                    <div><BiVolumeFull className={style.volume_icon}/></div>
                </div>
            </div>
        </section>
    )
}

export default Player;