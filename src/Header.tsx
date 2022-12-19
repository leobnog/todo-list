import styles from "./Header.module.css";
import imgLogo from "./assets/rocket-logo.svg";
export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={imgLogo} className={styles.imglogo} />
        <div className={styles.textLogo} data-text="do">to</div>
      </div>
    </div>
  );
}
