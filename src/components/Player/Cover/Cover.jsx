import style from "./Cover.module.scss";

const Cover = () => {
    return (
        <div className={style.main_player_cover}>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/5/5a/Beck_Morning_Phase.jpg"
                alt="cover"
            />
        </div>
    );
};

export default Cover;