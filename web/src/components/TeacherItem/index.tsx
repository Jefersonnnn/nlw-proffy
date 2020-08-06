import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/15790917?s=460&u=84924f6ea6cefe1c6bc83da3f5012572b5179084&v=4" alt="Jeferson Machado"/>
            <div>
                <strong>Jeferson Machado</strong>
                <span>Javinha</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de quimica avançada.
            <br/>
            Apaixonado por explodir coisas em laboratorio e por mudar a vidas das pessoas.
        </p>
        
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    );
}

export default TeacherItem;