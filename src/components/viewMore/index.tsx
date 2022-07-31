import Arrow from "components/icon/Arrow"
import { classHelper } from "helpers/utils"
import { MouseEventHandler } from "react"
import styles from "./index.module.scss"

const ViewMore = ({ onClick }: { onClick: MouseEventHandler }): JSX.Element => {
  return (
    <div className={styles.viewMore}>
      <button className={classHelper("button", styles.button)} onClick={onClick}>
        <span className={styles.text}>View More</span>
        <Arrow color="#a790e8" />
      </button>
    </div>
  )
}

export default ViewMore
