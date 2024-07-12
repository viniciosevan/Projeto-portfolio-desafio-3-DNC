import { FaInstagram,FaLinkedin,FaGithub, FaFigma } from "react-icons/fa";
import styles from './Footer.module.css'
function Footer(){
    return (
        <div className={styles.Footer}>
              
            <p>Meu contato:</p>
            <p>34 98888888</p>
            <p>E-mail:</p>
            <p>viniciosevan@gmail.com</p>

            <ul>
                
                <li><a href="https://github.com/"><FaGithub size={30}/></a></li><li>
               <a href="https://www.figma.com/" target="_blank"><FaFigma size={30}/></a></li>
                <li><a href="www.linkedin.com/in/vinicios-evangelista-00a375304"><FaLinkedin size={30}/></a></li>
            </ul>

        </div>
    )
}

export default Footer