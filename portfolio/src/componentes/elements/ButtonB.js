import styles from "./ButtonB.module.css"
function ButtonB({text}){
    return(
        <section>
            <button className={styles.btn}>{text}</button>

        </section>
    )
}

export default ButtonB