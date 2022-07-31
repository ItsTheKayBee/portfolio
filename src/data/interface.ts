import { FC } from "react"

export interface PortfolioData {
  header: HeaderType[]
  about: AboutType
  experiences: ExperiencesType
  skills: SkillsType
  projects: ProjectsType
  achievements: AchievementsType
  publications: PublicationsType
  contact: ContactType
}

export type ProjectsType = {
  title: string
  data: ProjectsData[]
  showCount: number
}

export type AchievementsType = {
  title: string
  data: DataWithButton[]
  showCount: number
}

export type PublicationsType = AchievementsType

export type ContactType = {
  title: string
  data: IconTextButton[]
  image: Image
  resume: Button
  description: string
}

export type SkillsType = {
  title: string
  images: Image[]
  showCount: number
}

export type AboutType = {
  image: Image
  data: IconTextButton[]
}

export type ExperiencesType = {
  title: string
  data: DataWithDates[]
  showCount: number
}

export type Image = {
  url: string
  alt: string
}

export type Button = {
  link: string
}

type Comp = {
  component: FC
}

export type IconButton = Button & Comp

export interface TextButton extends Button {
  text: string
}
export type IconTextButton = IconButton & TextButton

export type Data = {
  image: Image
  title: string
  subTitle: string
  description: string
  id?: number
}

export interface DataWithDates extends Data {
  dates: {
    startDate: Date
    endDate?: Date
  }
}

export interface DataWithButton extends Data {
  button?: TextButton
}

export interface ProjectsData extends DataWithButton {
  technologies: string[]
}

export interface HeaderType {
  title: string
  link: string
}

export interface Web {
  size: number
  posX: number
  poxY: number
  rot: number
}
