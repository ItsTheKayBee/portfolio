import styles from "styles/section.module.scss"

const Arrow = ({ color }: { color?: string }): JSX.Element => {
  return (
    <svg
      width="26"
      height="16"
      viewBox="0 0 79 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrowIcon}
    >
      <path
        className={styles.arrow}
        fill={color}
        d="M77.8984 21.399L62.8984 36.399C61.4324 37.865 59.0594 37.8627 57.5957 36.399C56.1309 34.9342 56.1309 32.5611 57.5957 31.0963L66.2031 22.5006H3.75C1.67695 22.5006 0 20.8248 0 18.6451C0 16.4654 1.67695 15.0006 3.75 15.0006H66.2031L57.6039 6.40137C56.1391 4.93652 56.1391 2.56348 57.6039 1.09863C59.0688 -0.366211 61.4418 -0.366211 62.9066 1.09863L77.9066 16.0986C79.3633 17.567 79.3633 19.9342 77.8984 21.399Z"
      />
    </svg>
  )
}

export default Arrow
