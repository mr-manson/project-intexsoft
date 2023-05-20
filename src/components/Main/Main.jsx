import style from "./Main.module.scss";
import New from "./New/New";
import Recently from "./Recently/Recently";
import Recommend from "./Recommend/Recommend";

const Main = () => {
    return (
        <div className={style.main_content}>
            <New/>
            <Recently/>
            <Recommend/>
        </div>
    )
}

export default Main;