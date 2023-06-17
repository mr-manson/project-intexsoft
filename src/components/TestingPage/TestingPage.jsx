import style from "./TestingPage.module.scss";
import { GiTestTubes } from "react-icons/gi";
import axios from "axios";
import { useEffect, useState } from "react";

const TestingPage = () => {

    const [data, setData] = useState();
    /*useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:5000/api/todo/1");
            setData(res.data.content);
        }
        getData();
    }, []);*/

    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    const trackId = "1RH1rm06m9D4Dnh1yTFWck66BVo3MmC2z";
    const trackLink = `${link}${trackId}`;

    return (
        <div className={style.test_main}>
            <div className={style.title}>
                <GiTestTubes className={style.test_icon}/>
                <p>THIS IS TESTING PAGE</p>
            </div>
            {/*<div>Data from database - {data ? data : "nothing"}</div>*/}
        </div>
    )
}

export default TestingPage;
