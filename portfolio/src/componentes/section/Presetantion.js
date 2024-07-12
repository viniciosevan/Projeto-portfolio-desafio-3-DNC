import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
import styles from './Presetantion.module.css'
import { useEffect, useState } from 'react'
function Presetantion() {
    const [text, setText] = useState('')
    const toRotate = ['Eu sou Vinícios      ', 'é trabalho como Dev FrontEnd       ']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }



    return (
        <div className={styles.Presetantion} id='Presetantion'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, {text}</h1>
            <p>Desenvolvedor frontend com experiência em criar
                interfaces de usuário envolventes <br></br> e intuitivas. Domino HTML, CSS, JavaScript e frameworks como
                React e Vue.js.<br></br> Minha paixão é transformar ideias complexas em soluções
                elegantes, sempre<br></br> focado
                na experiência do usuário. Estou constantemente aprendendo novas<br></br> tecnologias para manter meu
                trabalho atualizado e eficaz.<br></br><br></br>
                Vamos juntos transformar suas ideias em realidade digital!</p>

            <ButtonA link="https://www.instagram.com/">Conecte-se comigo!!</ButtonA>



        </div>
    )
}
export default Presetantion








    