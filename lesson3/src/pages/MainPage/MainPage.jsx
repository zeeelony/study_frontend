import Descroption from "../../components/Description/Description"
import styles from './MainPage.css'

const MainPage = () => {
    const info = { title: "Title", description: "description" };
  
    return (
    <>
    <div className={styles.mainPage}>
      <h1>Main Page</h1>
      <Descroption info={info} />
    </div>
    </>
    )
}

export default MainPage