import style from "./Album.module.scss";

const Album = (props) => {

    return (
        <div>
            <div className={style.album_item}>
                <div className={style.album_cover}>
                    <img src={props.album.img} alt=""/>
                </div>
                <div className={style.album_info_box}>
                    <div className={style.album_ifo}>
                        <ul>
                            <li>• {props.album.title}</li>
                            <li>• 1998</li>
                            <li>• 52m 15s</li>
                            <li>
                            <input id={props.album.id} className={style.playlist_input} type="checkbox"/>
                            <label htmlFor={props.album.id} className={style.playlist}>• 6 tracks</label>

                            <div className={style.playlist_items}>
                                <p>1. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>2. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>3. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>4. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>5. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>6. Lorem, ipsum dolor <span>3:33</span></p>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;