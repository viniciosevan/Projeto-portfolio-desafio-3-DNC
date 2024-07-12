import styles from './Card.module.css';
import ipdnc from "../section/images/future.jpeg"
import ButtonB from "../elements/ButtonB"
import { useState } from 'react';

function Card({img,title, tech, description,repo,site}) {

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOf(){
        setInfo(false)
    }


    return (
        <div onMouseLeave={InfoOf} className={styles.Card}>
            <a onMouseEnter={InfoOn} href={site}>
            <img src={ipdnc} alt="Ipdnc"/>
            </a>

            {info === true &&(
                <div>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
                
            </div>

            )}
            
        </div>

        
    );
}

export default Card;
