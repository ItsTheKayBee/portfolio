export interface PortfolioData {
	about: AboutType
	experiences: ExperiencesType
	skills: SkillsType
	projects: ProjectsType
	achievements: AchievementsType
	publications: PublicationsType
	contact: ContactType
	footer: {
		title: string
	}
}

export type ProjectsType = {
	title: string
	data: ProjectsData[]
}

export type AchievementsType = {
	title: string
	data: DataWithButton[]
}

export type PublicationsType = {
	title: string
	data: DataWithButton[]
}

export type ContactType = {
	title: string
	data: IconTextButton[]
	image: Image
}

export type SkillsType = {
	title: string
	data: {
		image: Image
		ratings: number
	}[]
}

export type AboutType = {
	position: string
	description: string
	image: Image
	social: IconButton[]
	resume: Button
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
}

export type Image = {
	url: string
	alt: string
}

export type Button = {
	link: string
}
export type IconButton = Button & Image

export interface TextButton extends Button {
	text: string
}
export type IconTextButton = IconButton & TextButton

export type Data = {
	image: Image
	title: string
	subTitle: string
	description: string
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
