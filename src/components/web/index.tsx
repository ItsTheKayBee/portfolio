import { Web as WebType } from "data/interface"
import { classHelper } from "helpers/utils"
import { useEffect, useState } from "react"
import styles from "./index.module.scss"

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const Web = ({ web }: { web: WebType }): JSX.Element | null => {
  const [visible, setVisible] = useState(true)
  const [destroy, setDestroy] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisible(false)
    }, 5000)

    const timer2 = setTimeout(() => {
      setDestroy(true)
    }, 7000)

    return (): void => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return !destroy ? (
    <img
      src={`${imagePrefix}/images/web.svg`}
      alt="web"
      className={classHelper(styles.web, visible ? styles.active : "")}
      style={{
        top: web.poxY,
        left: web.posX,
        width: web.size,
        transform: `rotate(${web.rot}deg)`
      }}
      draggable="false"
    />
  ) : null
}

export default Web
