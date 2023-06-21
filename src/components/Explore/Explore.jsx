import style from "./Explore.module.scss";
import { GiGClef } from "react-icons/gi";
import Style from "./Style/Style";
import {dbSimulation} from "../../db_simulation/db_simulation";

const Explore = () => {

    const styles = dbSimulation.styles;
    console.log(styles);


    return (
        <div className={style.explore_wrapper}>
            <div className={style.title}>Find your favourite <span><GiGClef/>sound</span></div>
            <div className={style.styles_box}>
                {styles.map((style) => {
                    return (
                        <Style key={style.id} styleName={style.name} img={style.img}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore;