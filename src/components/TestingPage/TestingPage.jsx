import style from "./TestingPage.module.scss";
import { GiTestTubes } from "react-icons/gi";
import default_cover from "../../assets/default_cover.jpg";
import { useSelector } from "react-redux";

const TestingPage = () => {

    /*const [data, setData] = useState();
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:5000/api/todo/1");
            setData(res.data.content);
        }
        getData();
    }, []);*/

    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";
    const fileId = "1Ez-J4U6p4hTyvBhM66HvThnw9aUFceqo";

    const getLink = (id) => {
        return !id ? default_cover : `${link}`+id;
    }


    return (
        <div className={style.test_main}>
            <div className={style.title}>
                <GiTestTubes className={style.test_icon}/>
                <p>THIS IS TESTING PAGE</p>
            </div>
            {/*<img className={style.img} src={getLink(fileId)} alt=""/>*/}
            {/*<div>Data from database - {data ? data : "nothing"}</div>*/}
        </div>
    )
}

export default TestingPage;
