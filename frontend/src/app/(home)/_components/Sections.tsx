import SectionItem from "./SectionItem";
import styles from "./sections.module.css";

export default function Sections() {
  return (
    <div className={styles.sectionsGrid}>
      <SectionItem
        href="/loja#produtos"
        imageSrc="/assets/images/produtos.png"
        altText="Produtos"
        label="Produtos"
        itemText="Produtos Oficiais"
        Color="#F9D63A"
        BgColor="#294c2d"
      />
      <SectionItem
        href="/loja/uniformes"
        imageSrc="/assets/images/uniformes.png"
        altText="Uniformes"
        label="Uniformes"
        itemText="Uniforme Novo"
        Color="#0c4ab5"
        BgColor="#030c26"
      />
      <SectionItem
        href="/loja/acessorios"
        imageSrc="/assets/images/acessorios.png"
        altText="Acessórios"
        label="Acessórios"
        itemText="Acessórios Exclusivos"
        Color="#0c4ab5"
        BgColor="#030c26"
      />
      <SectionItem
        href="/loja/sobre"
        imageSrc="/assets/images/sobre.png"
        altText="Sobre"
        label="Sobre"
        itemText="Cola com Nós"
        Color="#F9D63A"
        BgColor="#294c2d"
      />
    </div>
  );
}
