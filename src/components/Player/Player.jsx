import style from "./Player.module.scss";
import { BsRepeat, BsList, BsRewindFill, BsFastForwardFill, BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { BiDevices, BiVolumeFull, BiMicrophone, BiDownload, BiFullscreen } from "react-icons/bi";
import { SiDiscogs } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { formatTime } from "../../tools/tools";


const Player = (props) => {

    const audio = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    const [elapsed, setElapsed] = useState(0);
    const [duration, setDuration] = useState(0);

    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    let trackId = props.playlist[index].link;
    const trackLink = `${link}${trackId}`;

    /*--BUTTONS-------------------------------------------------*/

    useEffect(() => {
        if (isPlaying) {
            setInterval(() => {
                setDuration(Math.floor(audio?.current?.duration));
                setElapsed(Math.floor(audio?.current?.currentTime));
            }, 100);
        }
    }, [isPlaying, duration])


    const play = () => {
        if (isPlaying) {
            setTimeout(() => {
                audio.current.play()
            }, 100)
        }
    };

    const togglePlay = () => {
        if (!isPlaying) {
            audio.current.play()
        } else {
            audio.current.pause()
        }
        setIsPlaying(prev => !prev)
    };

    const toggleFastForward = () => {
        if (index >= props.playlist.length - 1) {
            setIndex(0);
            trackId = props.playlist[0];
            play();
        } else {
            setIndex(prev => prev + 1)
            trackId = props.playlist[index];
            play();
        }
    }

    const toggleRewind = () => {
        if (index <= 0) {
            setIndex(props.playlist.length - 1);
            trackId = props.playlist[index];
        } else {
            setIndex(prev => prev - 1)
            trackId = props.playlist[index];
        }
        play();
    }
    /*--/BUTTONS------------------------------------------------*/

    return (
        <section className={style.player}>
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
                <div className={style.main_player_cover}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/5/5a/Beck_Morning_Phase.jpg"
                        alt="cover"
                    />
                </div>
                <div className={style.main_player_info}>
                    <div className={style.main_player_info_track}>{props.playlist[index].title}</div>
                    <div className={style.main_player_info_artist}>Beck</div>
                </div>
                <div className={style.main_player_progress}>
                    <div className={style.start}>{formatTime(elapsed)}</div>
                    <div className={style.progress_bar}></div>
                    <div className={style.finish}>{formatTime(duration - elapsed)}</div>
                </div>
                <div className={style.main_player_controls}>
                    <div><BsRepeat className={style.repeat_icon}/></div>
                    <div className={style.rewind_icon} onClick={toggleRewind}><BsRewindFill/></div>
                    <div className={style.play_icon} onClick={togglePlay}>{isPlaying ? <BsPauseCircle/> :
                        <BsPlayCircle/>}</div>
                    <div className={style.forward_icon} onClick={toggleFastForward}><BsFastForwardFill/></div>
                    <div><BsList className={style.playlist_icon}/></div>
                </div>

                <audio ref={audio} controls src={trackLink}/>

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