import style from "./Testingpage.module.scss";
import { GiTestTubes } from "react-icons/gi";
/*import axios from "axios";*/

const Testingpage = () => {

    /*axios.get("http://localhost:5000/api/todos", {
        withCredentials: true,
    })
        .then(response => response.data)
        .then((data) => {console.log(data)})*/



    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    const trackLink = `${link}1FDCqZ0C5gig2lLRSEvnMRERBFdVCqieY`;

    return (
        <div className={style.test_main}>
            <div className={style.title}>
                <GiTestTubes className={style.test_icon}/>
                <p>ЭТО СТРАНИЦА ДЛЯ ТЕСТОВ</p>
            </div>
            <audio controls
                   src={trackLink}>
            </audio>
        </div>
    )
}

export default Testingpage;
