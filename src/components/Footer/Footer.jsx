import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="mais">
      <h2 className={styles.title}>ENTRE EM CONTATO</h2>
      <div className={styles.container}>
        <div className={styles["footer-form"]}>
          <h3 className={styles.subTitle}>Saiba Mais</h3>
          <form>
            <div className={styles.inputGroup}>
              <input type="text" id="nome" name="nome" placeholder="Nome" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@gmail.com"
              />
            </div>

            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Mensagem, sugestão ou reclamação"
            ></textarea>

            <div className={styles.checkbox}>
              <input type="checkbox" id="novidades" name="novidades" />
              <label htmlFor="novidades">Quero receber novidades!</label>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className={styles["footer-contact"]}>
          <h3>Marco Madureira</h3>
          <p>Celular: (21) 12345-6789</p>
          <p>Email: marcosmadureira@gmail.com</p>

          <h4>Redes Sociais</h4>
          <div className={styles.social}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/5521123456789"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:marcosmadureira@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
