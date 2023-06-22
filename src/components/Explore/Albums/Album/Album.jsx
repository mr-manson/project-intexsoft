import style from "./Album.module.scss";

const Album = (props) => {

    console.log(props);

    return (
        <div>
            <div className={style.album_item}>
                <div className="album_cover">
                    <img src="./assets/1998 - Mutations.jpg" alt=""/>
                </div>
                <div className="album_info_box">
                    <div className="album_ifo">
                        <ul>
                            <li>1998</li>
                            <li>52m 15s</li>
                            <input id="list 1" className="playlist_input" type="checkbox"/>
                            <label htmlFor="list 1" className="playlist">6 tracks</label>

                            <div className="playlist_items">
                                <p>1. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>2. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>3. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>4. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>5. Lorem, ipsum dolor <span>3:33</span></p>
                                <p>6. Lorem, ipsum dolor <span>3:33</span></p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;