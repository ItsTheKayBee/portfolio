import styles from "components/contact/index.module.scss"
import { FC } from "react"

const Email: FC = (): JSX.Element => {
  return (
    <svg
      viewBox="0 0 110 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.emailIcon}
      aria-label="Email"
    >
      <g className={styles.email}>
        <rect className={styles.base} x="14" y="11" width="82" height="53" rx="8" />
        <g className={styles.flap}>
          <path
            d="M53.2915 42.8163C54.3192 43.5283 55.6808 43.5283 56.7085 42.8163L94.7419 16.466C97.1591 14.7913 95.974 11 93.0334 11H16.9666C14.026 11 12.8409 14.7913 15.2581 16.466L53.2915 42.8163Z"
            className={styles.outline}
          />
          <path
            d="M53.9106 35.2924C54.5731 35.7227 55.4269 35.7227 56.0894 35.2924L87.4436 14.9273C89.1135 13.8426 88.3454 11.25 86.3542 11.25H23.6458C21.6546 11.25 20.8865 13.8426 22.5564 14.9273L53.9106 35.2924Z"
            className={styles.base}
          />
        </g>
      </g>
    </svg>
  )
}

export default Email
