import Link from 'next/link'
import styles from './sections.module.css'

interface SectionItemProps {
  href: string
  imageSrc: string
  altText: string
  label: string
  itemText: string
  Color: string
  BgColor: string
}

export default function SectionItem({
  href,
  imageSrc,
  altText,
  label,
  itemText,
  Color,
  BgColor,
}: SectionItemProps) {
  const colorStyle = {
    '--hover-bg': BgColor,
    '--text-color': Color,
  } as React.CSSProperties

  return (
    <Link href={href} className={styles.cell} style={colorStyle}>
      <img src={imageSrc} alt={altText} className={styles.img} />

      <div className={styles.hoverText}>{itemText}</div>

      <div className={styles.cellContent}>
        <span className={styles.label}>{label}</span>
      </div>
    </Link>
  )
}
