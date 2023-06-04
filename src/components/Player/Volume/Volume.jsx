import style from "./Volume.module.scss";
import { BiVolumeFull } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

const Volume = (props) => {
    const input = useRef();
    const [volume, setVolume] = useState(30);
    useEffect(() => {
        if(props.audio){
            props.audio.current.volume = volume / 100;
        }
    },[volume, props.audio]);

    const changeVolume = () => {
        setVolume(input?.current?.value);
    }

    return (
        <div className={style.volume_container}>
            <div className={style.volume_icon}><BiVolumeFull/></div>
            <input type="range" min="0" max="100" value={volume} ref={input} onChange={changeVolume}/>
        </div>
    );
};

export default Volume;