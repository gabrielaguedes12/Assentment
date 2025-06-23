import React from "react";
import styles from "./Biografia.module.css";

export default function Biografia() {
  return (
    <section className={styles.biografia} id="bio">
      <div className={styles.container}>
        <img
          src="https://videos.openai.com/vg-assets/assets%2Ftask_01jyam71fdfgrtme4faq0mtayq%2F1750555993_img_3.webp?st=2025-06-22T02%3A09%3A34Z&se=2025-06-28T03%3A09%3A34Z&sks=b&skt=2025-06-22T02%3A09%3A34Z&ske=2025-06-28T03%3A09%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=xibDjTN7j29VF7DsSDDcQje0ehwKolBw7cuswvUHCxk%3D&az=oaivgprodscus"
          alt="Marco Madureira"
          className={styles.image}
        />
        <p className={styles.texto}>
          Marco Madureira iniciou sua trajetória como educador na zona norte do
          Rio de Janeiro. Engajado em projetos sociais desde jovem, atuou como
          vereador e defensor da educação pública de qualidade. Sua carreira
          política é marcada pelo diálogo e pela luta por justiça social.
        </p>
      </div>
    </section>
  );
}
