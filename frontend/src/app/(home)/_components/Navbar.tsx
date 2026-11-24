import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={150}
          height={200}
        />
      </Link>

      <Link href="/loja" className={styles.botao}>
        Loja
      </Link>
    </nav>
  )
}
