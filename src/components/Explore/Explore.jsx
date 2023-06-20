import style from "./Explore.module.scss";
import { GiGClef } from "react-icons/gi";
import Style from "./Style/Style";
import { useEffect, useState } from "react";
import { exploreAPI } from "../../api/explore-api";

const Explore = () => {

    const [styles, setStyles] = useState([]);
    useEffect(async () => {
        const res = await exploreAPI.getStyles();
        setStyles(res.data);
    }, []);

    console.log(styles);

    /*    const styles = [
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
        ];*/

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