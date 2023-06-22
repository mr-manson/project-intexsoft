import style from "./Albums.module.scss";
import { GiGClef } from "react-icons/gi";
import { dbSimulation } from "../../../db_simulation/db_simulation";
import { useParams } from "react-router-dom";
import Album from "./Album/Album";

const Albums = () => {
    const {artistId} = useParams();
    let artist = {};
    let albums = [];
    const styles = dbSimulation.styles;

    for (let i = 0; i < styles.length; i++) {
        for (let y = 0; y < styles[i].artists.length; y++) {
            if (styles[i].artists[y].id === +artistId) {
                artist = styles[i].artists[y];
                albums = (styles[i].artists[y].album);
            }
        }
    }

    console.log(albums);

    return (
        <div className={style.albums_wrapper}>
            <div className={style.title}>Let the <span><GiGClef/>sound</span> starts</div>
            <div className={style.albums_box}>
                <div className={style.artist_info}>
                    <img src={artist.img} alt={artist.name}/>
                    <div className={style.artist_text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at deserunt, ex hic laboriosam magnam, nulla numquam perferendis quas repellat sapiente temporibus voluptatibus. Dolores, totam.
                    </div>
                </div>
                <div>{albums.map(album => {
                    return (
                        <Album key={album.id} album={album}/>
                    )
                })}

                </div>
            </div>

        </div>
    );
};

export default Albums;