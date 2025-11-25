import styles from './Footer.module.css';
export default function Footer(){
  return (
    <footer className={styles.wrap}>
      <div className={styles.inner}>© {new Date().getFullYear()} FlowWithYogaSisters • Built with ❤️</div>
    </footer>
  )
}
