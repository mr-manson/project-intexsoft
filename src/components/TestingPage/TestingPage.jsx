import style from "./TestingPage.module.scss";
import { GiTestTubes } from "react-icons/gi";
import default_cover from "../../assets/default_cover.jpg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const TestingPage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:5000/api/styles");
            setData(res.data);
        }
        getData();
    }, []);

    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    const fileId = "1Ez-J4U6p4hTyvBhM66HvThnw9aUFceqo";

    const getLink = (id) => {
        return !id ? default_cover : `${link}`+id;
    }

    console.log(data[0].id);

    return (
        <div className={style.test_main}>
            <div className={style.title}>
                <GiTestTubes className={style.test_icon}/>
                <p>THIS IS TESTING PAGE</p>
            </div>
            {/*<img className={style.img} src="https://raw.githubusercontent.com/mr-manson/project-intexsoft/main/src/assets/styles/classical.webp" alt=""/>*/}
            <div>Data from database - {data.toString()}</div>
            <img style={{height: "300px", width: "300px"}} src={data[0].imgLink} alt=""/>
        </div>
    )
}

export default TestingPage;
