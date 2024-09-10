import Descroption from "../../components/Description/Description";
import styles from './AboutPage.css'

function AboutPage(){
    const info = { title:"Tittle2", descroption:"description 2"}

    return(
        <>
        <div className={styles.AboutPage}>
        <h1>About Page</h1>
        <Descroption info={info}/>
        </div>
        </>
    )
}

export default AboutPage