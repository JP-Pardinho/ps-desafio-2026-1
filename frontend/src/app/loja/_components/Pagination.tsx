import styles from './pagination.module.css'
import Link from 'next/link'

export default function Pagination({
  totalProducts,
  productPerPage,
  activePage,
  setActivePage,
}: {
  totalProducts: number
  productPerPage: number
  activePage: number
  setActivePage: (page: number) => void
}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i)
  }

  const previusPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1)
    }
  }

  const nextPage = () => {
    if (activePage < pageNumbers.length) {
      setActivePage(activePage + 1)
    }
  }

  return (
    <div className={styles.container}>
      {activePage > 1 ? (
        <button className={styles.prev} onClick={previusPage}>
          <Link className={styles.Link} href="#products">
            {'<'}
          </Link>
        </button>
      ) : (
        <button className={styles.prev} onClick={previusPage} disabled>
          {'<'}{' '}
        </button>
      )}
      <span className={styles.page}>{activePage}</span>
      {activePage < pageNumbers.length ? (
        <button className={styles.next} onClick={nextPage}>
          <Link className={styles.Link} href="#products">
            {'>'}
          </Link>
        </button>
      ) : (
        <button className={styles.next} onClick={nextPage} disabled>
          {'>'}
        </button>
      )}
    </div>
  )
}
