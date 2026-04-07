import { Metadata } from 'next';
import styles from './_components/sobre.module.css'
import { FaLaravel, FaReact, FaCss3 } from 'react-icons/fa'
import { AiTwotoneApi } from "react-icons/ai";

export const metadata: Metadata = {
  title: 'Street Brasil | Sobre',
  description: 'Loja de artigos esportivos do Brasil.',
};

export default function Sobre() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Sobre o Projeto</h1>
      <p className={styles.subtitulo}>Desafio Técnico Adapti</p>

      <p className={styles.descricao}>
        Esta plataforma foi desenvolvida como parte de um desafio técnico. 
        A arquitetura foi pensada para ser robusta e escalável, utilizando <strong>Laravel</strong> no back-end 
        para construir uma API sólida e <strong>React</strong> no front-end para garantir uma interface 
        dinâmica, rápida e responsiva. Todo o design foi inspirado na estética urbana brasileira.
      </p>

      <div className={styles.tecnologias}>
        <span className={styles.tag}>
            <FaLaravel />
            Laravel
        </span>
        <span className={styles.tag}>
            <FaReact />
            React
        </span>
        <span className={styles.tag}>
            <AiTwotoneApi />
            API REST
        </span>
        <span className={styles.tag}>
            <FaCss3 />
            CSS
        </span>
      </div>
    </div>
  )
}