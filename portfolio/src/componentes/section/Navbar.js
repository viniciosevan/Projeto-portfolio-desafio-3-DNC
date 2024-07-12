import styles from "./Navbar.module.css"
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'



function Navbar(){
    return (
        <div className={styles.Navbar}>
            <ul>
            <li ><Nav.Link href="#Projects">Projetos</Nav.Link></li>
                <li ><Nav.Link href="#Skills">Tecnologias</Nav.Link></li>
                <li ><Nav.Link href="#Me">Sobre mim</Nav.Link></li>
            </ul>
            <ul>
            <li><a href="https://github.com/"target="_blanck"><FaGithub size={30}/></a></li>
                
                <li><a href="www.linkedin.com/in/vinicios-evangelista-00a375304"><FaLinkedin size={30}/></a></li>
                
            </ul>
        </div>
    )
}

export default Navbar