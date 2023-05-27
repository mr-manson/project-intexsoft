import style from "./Testingpage.module.scss";
import { GiTestTubes } from "react-icons/gi";
/*import { useEffect, useState } from "react";*/
/*import axios from "axios";*/

const Testingpage = () => {
/* ==================== with axios ==================== */
    /*axios.get("http://localhost:5000/api/todos", {
        withCredentials: true,
    })
        .then(res => res.data)
        .then((data) => {console.log(data)})*/
/* ==================== with fetch ==================== */
    /*const [data, setData] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/api/todos")
            .then(res => res.json())
            .then(result => setData(result));
    })
*/

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
