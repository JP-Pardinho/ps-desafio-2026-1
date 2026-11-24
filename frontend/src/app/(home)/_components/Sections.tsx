import SectionItem from './SectionItem'
import styles from './sections.module.css'

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
        href="/loja?category_id=a17f6e29-0fe7-4af8-a7d4-5b8b8e426faf"
        imageSrc="/assets/images/uniformes.png"
        altText="Uniformes"
        label="Uniformes"
        itemText="Uniforme Novo"
        Color="#0c4ab5"
        BgColor="#030c26"
      />
      <SectionItem
        href="/loja?category_id=a17fa610-64f3-4d84-a1d7-0d5106022275"
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
  )
}
