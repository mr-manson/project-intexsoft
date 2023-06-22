import style from "./Artists.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { dbSimulation } from "../../../db_simulation/db_simulation";
import { GiGClef } from "react-icons/gi";
import Artist from "./Artist/Artist";

const Artists = () => {

    const {styleId} = useParams();

    const artists = dbSimulation.styles.find(style => style.id === Number(styleId)).artists;

    return (
        <div className={style.artists_wrapper}>
            <div className={style.title}>The <span><GiGClef/>sound</span> is so different</div>
            <div>{artists.map(artist => {
                return (
                    <Artist artist={artist}/>
                )
            })}</div>
        </div>
    );
};

export default Artists;