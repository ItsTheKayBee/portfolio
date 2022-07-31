import { useEffect, useState } from "react"

import type { NextPage } from "next"
import Head from "next/head"

import dynamic from "next/dynamic"

import { portfolioDataObject } from "data"
import { Web as WebType } from "data/interface"

import { classHelper, getRandom } from "helpers/utils"

import Web from "components/web"
import Header from "components/header"
import About from "components/about"
import Loader from "components/loader"

const Achievements = dynamic(() => import("../components/achievements"))
const Contact = dynamic(() => import("../components/contact"))
const Experience = dynamic(() => import("../components/experience"))
const Projects = dynamic(() => import("../components/projects"))
const Publications = dynamic(() => import("../components/publications"))
const Skills = dynamic(() => import("../components/skills"))

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const Home: NextPage = () => {
  const [webs, setWebs] = useState<WebType[]>([])
  const [circlePosition, setCirclePosition] = useState({
    x: -300,
    y: -300
  })
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  const createWeb = (e: any): WebType => {
    const size = getRandom(50, 200)
    const rot = getRandom(0, 360)

    return {
      size,
      posX: e.pageX - size / 2,
      poxY: e.pageY - size / 2,
      rot
    }
  }

  const handleClick = (e: any): void => setWebs((prev) => [...prev, createWeb(e)])

  const moveCircle = (e: any): void => {
    if (webs.length === 0) setCirclePosition({ x: e.pageX - 65, y: e.pageY - 65 })
  }

  return (
    <>
      <Head>
        <title>Kunal Bohra | Web Developer</title>
        <meta
          name="description"
          content="Software developer based in Mumbai. Frontend developer experienced in React.js, Next.js, SCSS, javascript, flutter, react native."
        />
        <meta
          name="keywords"
          content="Software developer, Frontend developer, React.js developer, Next.js developer, UI developer, Web developer"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; connect-src 'self'; font-src 'self'; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; worker-src 'none';"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${imagePrefix}/site/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${imagePrefix}/site/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${imagePrefix}/site/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${imagePrefix}/site/site.webmanifest`} />
      </Head>

      <main
        className={classHelper("main", !isLoading ? "cursor" : "")}
        onClick={handleClick}
        onMouseMove={moveCircle}
      >
        {isLoading && <Loader />}
        {webs.map((data, key) => (
          <Web web={data} key={key} />
        ))}
        <img
          src={`${imagePrefix}/images/cursor-circle.svg`}
          alt="tap"
          className={classHelper("cursorCircle", webs.length > 0 ? "hide" : "")}
          style={{ left: circlePosition.x, top: circlePosition.y }}
          draggable="false"
        />
        <Header headerData={portfolioDataObject.header} />
        <About {...portfolioDataObject.about} />
        <Experience {...portfolioDataObject.experiences} />
        <Skills {...portfolioDataObject.skills} />
        <Projects {...portfolioDataObject.projects} />
        <Achievements {...portfolioDataObject.achievements} />
        <Publications {...portfolioDataObject.publications} />
        <Contact {...portfolioDataObject.contact} />
      </main>
    </>
  )
}

export default Home
