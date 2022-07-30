import { ContactType } from "data/interface"
import { classHelper } from "helpers/utils"
import { useInView } from "react-intersection-observer"
import sectionStyles from "styles/section.module.scss"
import styles from "./index.module.scss"
import SocialMediaStrip from "./SocialMediaStrip"

const Contact = ({ title, data, image, resume, description }: ContactType): JSX.Element => {
  const [sectionRef, sectionInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })

  return (
    <div
      className={classHelper(
        sectionStyles.section,
        sectionStyles.dark,
        styles.contactSection,
        sectionInView ? styles.inView : ""
      )}
      id="contact"
    >
      <img src={image.url} alt={image.alt} className={styles.bgImage} loading="lazy" />
      <div className={classHelper(sectionStyles.subSection, styles.contact)}>
        <div className={classHelper("col", styles.detailSection)}>
          <div
            className={classHelper(
              sectionStyles.titleSection,
              sectionInView ? sectionStyles.inView : "",
              styles.title
            )}
            ref={sectionRef}
          >
            <h1 className={sectionStyles.sectionTitle}>{title}</h1>
          </div>
          <p className={styles.description}>{description}</p>
          <SocialMediaStrip social={data} resume={resume} />
        </div>
      </div>
    </div>
  )
}

export default Contact
