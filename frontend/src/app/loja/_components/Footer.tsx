import Image from "next/image"
import styles from "./footer.module.css"
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="footer" className={styles.rodape}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
        </div>

        <div className={styles.redesSociais}>
          <div className={styles.linksRedes}>
            <a
              href="https://instagram.com/jp.pardinho"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://github.com/jp-pardinho"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jppardinho"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.divisor}></div>
        <p className={styles.rodapeFinal}>
          &copy; 2026 Street Brasil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
