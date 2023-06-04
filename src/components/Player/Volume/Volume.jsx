import style from "./Volume.module.scss";
import { BiVolumeFull } from "react-icons/bi";

const Volume = () => {
    return (
        <div className={style.volume_container}>
            <div className={style.volume_icon}><BiVolumeFull/></div>
            <input type="range" id="points" name="points" min="0" max="10"/>
        </div>
    );
};

export default Volume;