import { FC } from 'react'

export interface PortfolioData {
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
	isActive?: boolean
}

export type AchievementsType = {
	title: string
	data: DataWithButton[]
	isActive?: boolean
}

export type PublicationsType = {
	title: string
	data: DataWithButton[]
	isActive?: boolean
}

export type ContactType = {
	title: string
	data: IconTextButton[]
	image: Image
	isActive?: boolean
}

export type SkillsType = {
	title: string
	data: {
		image: Image
		ratings: number
	}[]
	isActive?: boolean
}

export type AboutType = {
	position: string
	description: string
	image: Image
	social: IconButton[]
	resume: Button
	subTitle: string
	isActive?: boolean
}

export type StatsType = {
	stats: KeyValue[]
}

export type KeyValue = {
	title: string
	value: number
}

export type ExperiencesType = {
	title: string
	data: DataWithDates[]
	isActive?: boolean
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
	isActive?: boolean
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

export type Position = {
	x: number
	y: number
	originX?: number
	originY?: number
	noiseOffsetX?: number
	noiseOffsetY?: number
}
