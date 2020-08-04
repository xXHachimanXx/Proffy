import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/38514137?s=460&u=fade84dc7161fd03a1d74a914811a7d47b428c8d&v=4"
          alt="xXHachimanXx"
        />

        <div>
          <strong>xXHachimanXx</strong>
          <span>Química quântica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias da ciência avançada.
            <br /><br />
            Professor louco por explodir coisas em laboratório e por mudar a vida das pessoas através da química. Mais de 20.000 pessoas já foram cobaias das minhas experiências.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>$20,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>

    </article>
  );
}

export default TeacherItem;