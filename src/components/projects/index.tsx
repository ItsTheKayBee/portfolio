import { useEffect, useRef, useState } from "react"
import Arrow from "components/icon/Arrow"
import { ProjectsData, ProjectsType } from "data/interface"
import sectionStyles from "styles/section.module.scss"
import styles from "./index.module.scss"
import { classHelper } from "helpers/utils"
import { useInView } from "react-intersection-observer"
import ViewMore from "components/viewMore"

const Projects = ({ title, data, showCount }: ProjectsType): JSX.Element => {
  const [viewAll, setViewAll] = useState(false)

  const [sectionRef, sectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })
  const onClick = (): void => setViewAll(true)

  return (
    <div className={sectionStyles.section} id="projects">
      <div
        className={classHelper(
          sectionStyles.titleSection,
          sectionInView ? sectionStyles.inView : ""
        )}
        ref={sectionRef}
      >
        <h1 className={sectionStyles.sectionTitle}>{title}</h1>
      </div>
      {data.slice(0, showCount).map((project, key) => (
        <Project key={key} {...project} id={key} />
      ))}
      {viewAll || data.length <= showCount ? (
        data
          .slice(showCount, data.length)
          .map((project, key) => <Project key={key} {...project} id={key} />)
      ) : (
        <ViewMore onClick={onClick} />
      )}
    </div>
  )
}

const Project = ({
  image,
  title,
  subTitle,
  description,
  technologies,
  button,
  id = 0
}: ProjectsData): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoWrapperRef, videoInView] = useInView({
    rootMargin: "-300px 0px"
  })
  const [projectRef, projectInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })

  useEffect(() => {
    if (videoInView) videoRef.current?.play()
  }, [videoInView])

  return (
    <div
      className={classHelper(
        sectionStyles.subSection,
        id % 2 !== 0 ? sectionStyles.reverse : "",
        projectInView ? sectionStyles.inView : ""
      )}
      ref={projectRef}
    >
      <div className="col a-center">
        <div ref={videoWrapperRef}>
          <video height={300} width={300} ref={videoRef} className={styles.video} muted>
            <source src={image.url} type="video/webm" />
            <source src={image.url.replace("webm", "mkv")} type="video/mp4" />
          </video>
        </div>

        {button && (
          <a
            className={classHelper(
              "button",
              sectionStyles.link,
              styles.button,
              projectInView ? styles.inView : ""
            )}
            target="_blank"
            href={button.link}
            rel="noreferrer"
          >
            <p className={sectionStyles.linkText}>{button.text}</p>
            <Arrow />
          </a>
        )}
      </div>
      <div className="col">
        <h2 className={sectionStyles.title}>{title}</h2>
        <h3 className={sectionStyles.subTitle}>{subTitle}</h3>
        <p className={sectionStyles.description}>{description}</p>
        <div className={classHelper(styles.chipContainer, projectInView ? styles.inView : "")}>
          {technologies.map((tech, key) => (
            <Chip key={key} title={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Chip = ({ title }: { title: string }): JSX.Element => (
  <div className={classHelper(styles.chip)}>{title}</div>
)

export default Projects
