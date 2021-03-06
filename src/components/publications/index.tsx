import Arrow from "components/icon/Arrow"
import ViewMore from "components/viewMore"
import { DataWithButton, PublicationsType } from "data/interface"
import { classHelper } from "helpers/utils"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import sectionStyles from "styles/section.module.scss"
import styles from "./index.module.scss"

const Publications = ({ title, data, showCount }: PublicationsType): JSX.Element => {
  const [viewAll, setViewAll] = useState(false)

  const [sectionRef, sectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })
  const onClick = (): void => setViewAll(true)

  return (
    <div className={sectionStyles.section} id="publications">
      <div
        className={classHelper(
          sectionStyles.titleSection,
          sectionInView ? sectionStyles.inView : ""
        )}
        ref={sectionRef}
      >
        <h1 className={sectionStyles.sectionTitle}>{title}</h1>
      </div>
      {data.slice(0, showCount).map((pub, key) => (
        <Publication key={key} {...pub} id={key} />
      ))}
      {viewAll || data.length <= showCount ? (
        data
          .slice(showCount, data.length)
          .map((pub, key) => <Publication key={key} {...pub} id={key} />)
      ) : (
        <ViewMore onClick={onClick} />
      )}
    </div>
  )
}

const Publication = ({
  title,
  subTitle,
  description,
  button,
  image,
  id = 0
}: DataWithButton): JSX.Element => {
  const [subsectionRef, subsectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })

  return (
    <div
      className={classHelper(
        sectionStyles.subSection,
        id !== 0 ? sectionStyles.reverse : "",
        subsectionInView ? sectionStyles.inView : "",
        subsectionInView ? styles.inView : ""
      )}
      ref={subsectionRef}
    >
      <div className="col a-center">
        <img
          src={image.url}
          alt={image.alt}
          className={classHelper(styles.image, id !== 0 ? styles.reverse : "")}
          loading="lazy"
          draggable="false"
        />
      </div>
      <div className="col">
        <h2 className={sectionStyles.title}>{title}</h2>
        <h3 className={sectionStyles.subTitle}>{subTitle}</h3>
        <h4 className={sectionStyles.description}>{description}</h4>
        {button && (
          <a
            className={classHelper("button", sectionStyles.link, styles.button)}
            href={button.link}
            target="_blank"
            rel="noreferrer"
          >
            <p className={sectionStyles.linkText}>{button.text}</p>
            <Arrow />
          </a>
        )}
      </div>
    </div>
  )
}

export default Publications
