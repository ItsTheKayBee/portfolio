import { DataWithDates, ExperiencesType } from "data/interface"
import { DATE_FORMAT_OPTIONS } from "helpers/constants"
import { classHelper } from "helpers/utils"
import sectionStyles from "styles/section.module.scss"
import styles from "./index.module.scss"
import { useInView } from "react-intersection-observer"
import ViewMore from "components/viewMore"
import { useState } from "react"

const ExperienceSection = ({ title, data, showCount }: ExperiencesType): JSX.Element => {
  const [viewAll, setViewAll] = useState(false)

  const [sectionRef, sectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })

  const onClick = (): void => setViewAll(true)

  return (
    <div className={sectionStyles.section} id="experiences">
      <div
        className={classHelper(
          sectionStyles.titleSection,
          sectionInView ? sectionStyles.inView : ""
        )}
        ref={sectionRef}
      >
        <h1 className={sectionStyles.sectionTitle}>{title}</h1>
      </div>
      {data.slice(0, showCount).map((exp, key) => (
        <Experience key={key} {...exp} id={key} />
      ))}
      {viewAll || data.length <= showCount ? (
        data
          .slice(showCount, data.length)
          .map((exp, key) => <Experience key={key} {...exp} id={key} />)
      ) : (
        <ViewMore onClick={onClick} />
      )}
    </div>
  )
}

const Experience = ({
  title,
  subTitle,
  description,
  dates,
  image,
  id = 0
}: DataWithDates): JSX.Element => {
  const [subsectionRef, subsectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })

  return (
    <div
      className={classHelper(
        sectionStyles.subSection,
        id % 2 !== 0 ? sectionStyles.reverse : "",
        subsectionInView ? sectionStyles.inView : ""
      )}
      ref={subsectionRef}
    >
      <div className="col a-center">
        <img
          src={image.url}
          alt={image.alt}
          className={classHelper(
            styles.image,
            subsectionInView ? styles.inView : "",
            id % 2 !== 0 ? styles.reverse : ""
          )}
          loading="lazy"
          draggable="false"
        />
      </div>
      <div className="col">
        <h2 className={sectionStyles.title}>{title}</h2>
        <h3 className={sectionStyles.subTitle}>{subTitle}</h3>
        <h4 className={sectionStyles.subSubTitle}>
          {dates.startDate.toLocaleString("en-IN", DATE_FORMAT_OPTIONS)} -{" "}
          {dates.endDate?.toLocaleString("en-IN", DATE_FORMAT_OPTIONS) ?? "Present"}
        </h4>
        <div
          className={sectionStyles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  )
}

export default ExperienceSection
