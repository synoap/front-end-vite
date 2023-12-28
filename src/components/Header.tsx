import styles from './Header.module.css'
import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt='logo'/>
    <strong>4W3Dev</strong>
    </header>
  )
}