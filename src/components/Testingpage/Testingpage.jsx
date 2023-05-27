import style from "./Testingpage.module.scss";

const Testingpage = () => {

    const link = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=";

    return (
        <div className={style.test_main}>
            <audio controls
                   src={`${link}1FDCqZ0C5gig2lLRSEvnMRERBFdVCqieY`}>
            </audio>
        </div>
    )
}

export default Testingpage;