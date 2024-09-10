import styles from './Description.css'

function Descroption(info){
    return(
        <>
    <div className={styles.description}>
      <h2>{info.title}</h2>
      <p>{info.description}</p>
    </div>
        </>
    )
}

export default Descroption;