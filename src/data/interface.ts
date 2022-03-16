export interface PortfolioData {
	about: {
		position: String
		description: String
		image: Image
		social: IconButton[]
		resume: Button
	}
	experiences: {
		title: String
		data: DataWithDates[]
	}
	skills: {
		title: String
		data: {
			image: Image
			ratings: number
		}[]
	}
	projects: {
		title: String
		data: ProjectsData[]
	}
	achievements: {
		title: String
		data: DataWithButton[]
	}
	publications: {
		title: String
		data: DataWithButton[]
	}
	contact: {
		title: String
		data: IconTextButton[]
		image: Image
	}
	footer: {
		title: String
	}
}

type Image = {
	url: String
	alt: String
}

type Button = {
	link: String
}
type IconButton = Button & Image

interface TextButton extends Button {
	text: String
}
type IconTextButton = IconButton & TextButton

type Data = {
	image: Image
	title: String
	subTitle: String
	description: String
}

interface DataWithDates extends Data {
	dates: {
		startDate: Date
		endDate?: Date
	}
}

interface DataWithButton extends Data {
	button?: TextButton
}

interface ProjectsData extends DataWithButton {
	technologies: String[]
}
