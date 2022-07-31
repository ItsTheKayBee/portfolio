import ViewMore from "components/viewMore"
import { AchievementsType, DataWithButton } from "data/interface"
import { classHelper } from "helpers/utils"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import sectionStyles from "styles/section.module.scss"
import styles from "./index.module.scss"

const Achievements = ({ title, data, showCount }: AchievementsType): JSX.Element => {
  const [viewAll, setViewAll] = useState(false)

  const [sectionRef, sectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })

  const onClick = (): void => setViewAll(true)

  return (
    <div
      className={classHelper(sectionStyles.section, sectionStyles.dark, styles.achievementsWrapper)}
      id="achievements"
    >
      <div
        className={classHelper(
          sectionStyles.titleSection,
          sectionInView ? sectionStyles.inView : ""
        )}
        ref={sectionRef}
      >
        <h1 className={sectionStyles.sectionTitle}>{title}</h1>
      </div>
      <div className={styles.achievements}>
        {data.slice(0, showCount).map((achievement, key) => (
          <Achievement key={key} {...achievement} />
        ))}
        {viewAll || data.length <= showCount ? (
          data
            .slice(showCount, data.length)
            .map((achievement, key) => <Achievement key={key} {...achievement} />)
        ) : (
          <ViewMore onClick={onClick} />
        )}
      </div>
    </div>
  )
}

const Achievement = ({ image, title, subTitle, description }: DataWithButton): JSX.Element => {
  const [subsectionRef, subsectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })

  return (
    <div
      className={classHelper(styles.achievement, subsectionInView ? styles.inView : "")}
      ref={subsectionRef}
    >
      <div className={styles.imgWrapper}>
        <img
          src={image.url}
          alt={image.alt}
          className={styles.image}
          loading="lazy"
          draggable="false"
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subTitle}>{subTitle}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Achievements
