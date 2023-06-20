import style from "./Explore.module.scss";
import { GiGClef } from "react-icons/gi";
import Style from "./Style/Style";

const Explore = () => {
    const styles = [
        {
            id: 1,
            name: "funk"
        },
        {
            id: 2,
            name: "electronic"},
        {
            id: 3,
            name: "rock"},
    ];

    return (
        <div className={style.explore_wrapper}>
            <div className={style.title}>Find your favourite <span><GiGClef/>sound</span></div>
            <div className={style.styles_box}>
                {styles.map((style) => {
                    return (
                        <Style key={style.id} styleName={style.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore;