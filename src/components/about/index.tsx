import styles from "./index.module.scss"
import socialStyles from "../contact/index.module.scss"
import sectionStyles from "styles/section.module.scss"
import { AboutType } from "data/interface"
import { classHelper } from "helpers/utils"
import Hexagon from "components/bg/Hexagon"
import Triangles from "components/bg/Triangles"
import Star from "components/bg/Star"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const About = ({ image, data }: AboutType): JSX.Element => (
  <div className={classHelper(styles.about, sectionStyles.dark)}>
    <div className={styles.mainContent}>
      <img src={image.url} alt={image.alt} className={styles.image} draggable="false" />
      <div className={styles.hexagon}>
        <Hexagon />
      </div>
      <div className={styles.triangles}>
        <Triangles />
      </div>
      <div className={styles.star}>
        <Star />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>KUNAL BOHRA</h1>
        <div className={styles.position}>
          <h2>
            <span>WEB</span>
            <br className={styles.break} />
            <span>DEVELOPER</span>
          </h2>
        </div>
      </div>
      <div className={styles.social}>
        {data.map((option, key) => {
          const { component: Component } = option
          return (
            <a
              href={option.link}
              key={key}
              target="_blank"
              className={classHelper("button", socialStyles.socialButton, styles.button)}
              rel="noreferrer"
            >
              <Component />
            </a>
          )
        })}
      </div>
      <div className={styles.auroraWrapper}>
        <div className={styles.aurora} />
        <div className={styles.aurora1} />
        <div className={styles.aurora2} />
      </div>
      <div className={styles.auroraWrapper1}>
        <div className={styles.aurora3} />
        <div className={styles.aurora4} />
        <div className={styles.aurora5} />
      </div>
      <img
        src={`${basePath}/images/cube.webp`}
        alt=""
        height="100"
        width="100"
        className={styles.cube}
        draggable="false"
      />
      <img
        src={`${basePath}/images/triangle.webp`}
        alt=""
        height="84"
        width="92"
        className={styles.pyramid}
        draggable="false"
      />
    </div>
  </div>
)

export default About
