import Logo from "components/icon/Logo"
import { HeaderType } from "data/interface"
import styles from "./index.module.scss"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const Header = ({ headerData }: { headerData: HeaderType[] }): JSX.Element => (
  <nav className={styles.header}>
    <a href={basePath} className={styles.logo} aria-label="Logo">
      <Logo />
    </a>
    <ul className={styles.links}>
      {headerData.map(({ title, link }) => {
        return (
          <li key={title} className={styles.navItem}>
            <a href={link} className={styles.link}>
              {title}
            </a>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default Header
