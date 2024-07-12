import  styles from './ButtonA.module.css'

function ButtonA({text,link}){
    return(
        <div>
            <a href={link}>
            <button className={styles.btn}>{text}Conecte-se comigo</button>
            </a>

        </div>
    )
}

export default ButtonA


