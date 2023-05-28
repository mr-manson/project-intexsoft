import style from "./Testingpage.module.scss";
import { GiTestTubes } from "react-icons/gi";
import axios from "axios";
import { useEffect, useState } from "react";

const TestingPage = () => {
    const [data, setData] = useState();
    useEffect(() => {
        (async function getData() {
            const res = await axios.get("http://localhost:5000/api/todo/1");
            setData(res.data.content);
        })()

    }, []);


    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    const trackId = "1FDCqZ0C5gig2lLRSEvnMRERBFdVCqieY";
    const trackLink = `${link}${trackId}`;

    return (
        <div className={style.test_main}>
            <div className={style.title}>
                <GiTestTubes className={style.test_icon}/>
                <p>THIS IS TESTING PAGE</p>
            </div>
            <audio controls
                   src={trackLink}>
            </audio>
            <div>Data from database - {data}</div>
        </div>
    )
}

export default TestingPage;
