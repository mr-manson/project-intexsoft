import style from "./Cover.module.scss";
import default_cover from "../../../assets/default_cover.jpg";

const Cover = () => {

    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    const fileId = "1Ez-J4U6p4hTyvBhM66HvThnw9aUFceqo";

    const getLink = (id) => {
        return !id ? default_cover : `${link}` + id;
    }

    return (
        <div className={style.main_player_cover}>
            <img src={getLink(fileId)} alt="cover"
            />
        </div>
    );
};

export default Cover;