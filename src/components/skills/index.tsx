import ViewMore from "components/viewMore"
import { SkillsType } from "data/interface"
import { classHelper } from "helpers/utils"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import sectionStyles from "styles/section.module.scss"
import styles from "./index.module.scss"

const Skills = ({ title, images, showCount }: SkillsType): JSX.Element => {
  const [viewAll, setViewAll] = useState(false)

  const [sectionRef, sectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })

  const onClick = (): void => setViewAll(true)

  return (
    <div
      className={classHelper(sectionStyles.section, sectionStyles.dark, styles.skillsWrapper)}
      id="skills"
    >
      <div
        className={classHelper(
          sectionStyles.titleSection,
          sectionInView ? sectionStyles.inView : ""
        )}
        ref={sectionRef}
      >
        <h1 className={classHelper(sectionStyles.sectionTitle)}>{title}</h1>
      </div>
      <div className={styles.skills}>
        {images.slice(0, showCount).map((image, key) => (
          <Skill key={key} {...image} sectionInView={sectionInView} />
        ))}
        {viewAll || images.length <= showCount ? (
          images
            .slice(showCount, images.length)
            .map((image, key) => <Skill key={key} {...image} sectionInView={sectionInView} />)
        ) : (
          <ViewMore onClick={onClick} />
        )}
      </div>
    </div>
  )
}

const Skill = ({
  url,
  alt,
  sectionInView
}: {
  url: string
  alt: string
  sectionInView: boolean
}): JSX.Element => (
  <div className={classHelper(styles.skill, sectionInView ? styles.inView : "")}>
    <img src={url} alt={alt} className={styles.image} loading="lazy" draggable="false" />
    <h2 className={styles.title}>{alt}</h2>
  </div>
)

export default Skills
