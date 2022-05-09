import Email from 'components/icon/Email'
import Github from 'components/icon/Github'
import LinkedIn from 'components/icon/LinkedIn'
import { EXPERIENCE_START_DATE } from 'helpers/constants'
import { getDateDifference } from 'helpers/utils'
import { PortfolioData, StatsType } from './interface'

export const portfolioDataObject: PortfolioData = {
	about: {
		position: 'Software Development Engineer',
		description: `I am a highly motivated and enthusiastic Software Developer with a keen interest in full 
			stack development. I have worked on modern technologies like React.js, Next.js, Flutter, Python, etc.
			I like to explore new technologies and I am passionate about trying out new experiences. I have built
			several websites and apps in the process and I am always looking to hone my skills further in order to
			become a better Software Development Engineer.`,
		subTitle: "Hey! I'm",
		social: [
			{
				link: 'https://github.com/ItsTheKayBee',
				component: Github
			},
			{
				link: 'https://www.linkedin.com/in/itsthekaybee/',
				component: LinkedIn
			},
			{
				link: 'mailto:kbohra89@gmail.com',
				component: Email
			}
		],
		resume: {
			link: 'https://drive.google.com/file/d/13SPCHZxcmYYO5KQNNAkCLLIa0Ebjf6kc/view?usp=sharing'
		},
		image: {
			url: 'https://via.placeholder.com/200',
			alt: 'My picture'
		}
	},
	experiences: {
		title: 'Experiences',
		data: [
			{
				title: 'LazyPay (PayU)',
				subTitle: 'Software Development Engineer | Full Time',
				dates: {
					startDate: new Date('August 2021')
				},
				description:
					'Using mobile-first approach, building standout websites that are user-friendly, accessible and easily scalable.',
				image: {
					alt: 'LazyPay logo',
					url: '/images/lazypay.png'
				}
			},
			{
				title: 'Arcon',
				subTitle: 'Software Development Intern',
				dates: {
					startDate: new Date('December 2019'),
					endDate: new Date('January 2020')
				},
				description:
					'Software development and research internship at Arcon which involved various roles like .NET development and security.',
				image: {
					alt: 'Arcon logo',
					url: '/images/arcon.png'
				}
			},
			{
				title: 'GREedge',
				subTitle: 'External Content Developer',
				dates: {
					startDate: new Date('October 2018'),
					endDate: new Date('December 2018')
				},
				description:
					'Wrote high quality Letter of Recommendations for MS and Ph.D. aspirants for GreEdge.',
				image: {
					alt: 'GREedge logo',
					url: '/images/greedge.png'
				}
			}
		]
	},
	skills: {
		title: 'Skills',
		data: [
			{
				image: {
					alt: 'Python',
					url: '/logos/Python.svg'
				},
				ratings: 2
			},
			{
				image: {
					alt: 'React',
					url: '/logos/React.svg'
				},
				ratings: 2.5
			},
			{
				image: {
					alt: 'Javascript',
					url: '/logos/Javascript.svg'
				},
				ratings: 2.5
			},
			{
				image: {
					alt: 'Android',
					url: '/logos/Android.svg'
				},
				ratings: 2
			},
			{
				image: {
					alt: 'Dart',
					url: '/logos/Dart.svg'
				},
				ratings: 2
			},
			{
				image: {
					alt: 'Next.js',
					url: '/logos/Nextjs.svg'
				},
				ratings: 2.5
			},
			{
				image: {
					alt: 'Sass',
					url: '/logos/Sass.svg'
				},
				ratings: 2.5
			},
			{
				image: {
					alt: 'Java',
					url: '/logos/Java.svg'
				},
				ratings: 2
			},
			{
				image: {
					alt: 'Flutter',
					url: '/logos/Flutter.svg'
				},
				ratings: 2
			},
			{
				image: {
					alt: 'Firebase',
					url: '/logos/Firebase.svg'
				},
				ratings: 1.5
			},
			{
				image: {
					alt: 'TypeScript',
					url: '/logos/Typescript.svg'
				},
				ratings: 1
			},
			{
				image: {
					alt: 'React Native',
					url: '/logos/React_Native.svg'
				},
				ratings: 2
			},
			{
				image: {
					alt: 'Blockchain',
					url: '/logos/Ethereum.svg'
				},
				ratings: 1.5
			}
		]
	},
	projects: {
		title: 'Projects',
		data: [
			{
				title: 'Big Picture',
				subTitle: 'Apr 2021 - Present',
				description: `A Flutter app that uses the TMDB API to display movies. 
          It enables the tracking of movies and actors with a beautiful modern UI. 
          One can save movies and TV series and can get detailed information about the same`,
				button: {
					link: 'https://github.com/ItsTheKayBee/BigPicture/',
					text: 'View Project'
				},
				technologies: ['Flutter'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				}
			},
			{
				title: 'ASSESS',
				subTitle: 'Oct 2020 - Mar 2021',
				description: `For our final year project, we made a web app that provides full-length subjective tests 
          for self-assessment and examination. It reduces the need for manual evaluation by introducing 
          fully automated test grading and feedback which highlights the missing points in the answer 
          and suggests points that can be skipped next time. It also displays user statistics in the form of
          beautiful charts which can be handy for tracking one's progress.`,
				technologies: ['React', 'Sass', 'Firebase', 'Python', 'Flask'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				}
			},
			{
				title: 'TorBot',
				subTitle: 'Nov 2020',
				description: `A YIFY movie torrent downloader extension that automates the boring process of downloading movies 
        from torrent. Just select/highlight a movie along with its year or type in the movie in the extension and it will
         begin downloading the movie on your torrent client!.`,
				technologies: ['HTML', 'CSS', 'JS', 'Python'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				},
				button: {
					link: 'https://github.com/ItsTheKayBee/TorBot',
					text: 'View Project'
				}
			},
			{
				title: 'DePay',
				subTitle: 'Oct 2020',
				description: `A blockchain-based real-time micropayments app that was built during the ETHGlobal hackathon. 
        It enables
          - Instant crypto payments.
          - On the fly conversion of crypto into fiat currency and vice versa.`,
				technologies: ['Java', 'Android', 'Solidity'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				},
				button: {
					link: 'https://github.com/ItsTheKayBee/DePay',
					text: 'View Project'
				}
			},
			{
				title: '3D portfolio',
				subTitle: 'Jun 2020 - Aug 2020',
				description: `A beautiful 3D portfolio to showcase my skills. Made in pure javascript using the three.js library.`,
				technologies: ['Javascript', 'Three.js'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				},
				button: {
					link: 'https://kunalbohra.netlify.app/',
					text: 'View Project'
				}
			},
			{
				title: 'EssentialsKart - WhatsApp chatbot',
				subTitle: 'May 2020',
				description: `A WhatsApp chatbot made on Dialogflow, Python and Twilio API to serve online ordering of 
          essentials items during lockdown period.`,
				technologies: ['Dialogflow', 'Twilio', 'Flask', 'Python', 'HTML'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				},
				button: {
					link: 'https://github.com/ItsTheKayBee/EssentialsKart',
					text: 'View Project'
				}
			},
			{
				title: 'InstaNote',
				subTitle: 'Apr 2020 - May 2020',
				description: `Searching for study topics never got easier. This android app quickly brings top 3 web results
         to the user in the form of notes which the user can save for later reference. He can edit and modify the notes
          as per his choice and use them for studying during exams.`,
				technologies: ['Java', 'Android'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				},
				button: {
					link: 'https://github.com/ItsTheKayBee/InstaNote',
					text: 'View Project'
				}
			},
			{
				title: 'FundEasy - easy fund disbursal',
				subTitle: 'Jan 2020',
				description: `A blockchain-based platform for easy disbursal of funds through the government to the beneficiaries.`,
				technologies: ['Blockchain', 'Solidity', 'React'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				},
				button: {
					link: 'https://github.com/ItsTheKayBee/FundEasy',
					text: 'View Project'
				}
			},
			{
				title: 'Faculty Management System',
				subTitle: 'Jul 2019 - Dec 2019',
				description: `Interning under Dr Ujwala Bhangale to develop a full-stack website to manage faculty data in the college.
         It included a user-friendly interface that highlights features like report generation, CV generation, etc.`,
				technologies: ['PHP', 'MySQL', 'CSS', 'Javascript'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				},
				button: {
					link: 'https://github.com/ItsTheKayBee/FacultyManagementSystem',
					text: 'View Project'
				}
			},
			{
				title: 'Xervixx- A stock market dream fantasy game',
				subTitle: 'Jun 2019 - Jul 2019',
				description: `A full-stack website with a gamified interface to cater the users post loan disbursal. 
        This included a stock market dream fantasy game which users can play to get on the leaderboard.`,
				technologies: ['PHP', 'MySQL', 'CSS', 'Javascript'],
				image: {
					alt: '',
					url: 'https://via.placeholder.com/200'
				},
				button: {
					link: 'https://github.com/ItsTheKayBee/Xervixx',
					text: 'View Project'
				}
			}
		]
	},
	achievements: {
		title: 'Achievements',
		data: [
			{
				title: "Runner's Up",
				subTitle: 'KJSCE Hack 5.0 . Apr 2021',
				description:
					'Bagged second place in KJSCE hack 5.0 which was a national level hackathon with more than 50 teams.',
				button: {
					link: '',
					text: 'View certificate'
				},
				image: {
					alt: "Runner's up",
					url: 'https://via.placeholder.com/200'
				}
			},
			{
				title: 'Best Blockchain Team',
				subTitle: 'DotSlash Hackathon . Jan 2020',
				description: `Won the best blockchain team for our project 'FundEasy' at the DotSlash hackathon. 
          We also qualified for the national finals of the International Blockchain Olympiad.`,
				button: {
					link: '',
					text: 'View certificate'
				},
				image: {
					alt: 'Winner',
					url: 'https://via.placeholder.com/200'
				}
			},
			{
				title: 'Winner',
				subTitle: 'Zero Energy Building competition . Oct 2018',
				description: `Won the Zero Energy building competition by building a 
          strong presentation detailing all the prospects of a zero energy building on the campus`,
				button: {
					link: '',
					text: 'View certificate'
				},
				image: {
					alt: 'Winner',
					url: 'https://via.placeholder.com/200'
				}
			},
			{
				title: 'Winner',
				subTitle: `Why Don't YouTube? . Feb 2018`,
				description: `Aced the social media marketing competition that involved making a video and marketing 
          it across digital platforms and getting the maximum number of likes, shares and comments.`,
				button: {
					link: '',
					text: 'View certificate'
				},
				image: {
					alt: 'Winner',
					url: 'https://via.placeholder.com/200'
				}
			},
			{
				title: "Runner's Up",
				subTitle: 'Chefpreneur . Jan 2018',
				description:
					'Bagged second place in Chefpreneur which was a food making and marketing competition.',
				button: {
					link: '',
					text: 'View certificate'
				},
				image: {
					alt: "Runner's up",
					url: 'https://via.placeholder.com/200'
				}
			}
		]
	},
	publications: {
		title: 'Publications',
		data: [
			{
				title:
					'ASSESS - Automated Subjective Answer Evaluation Using Semantic Learning',
				subTitle: 'Elsevier-SSRN Conference Proceedings',
				button: {
					text: 'View Research',
					link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3861851'
				},
				image: {
					url: 'https://via.placeholder.com/200',
					alt: 'Assess image'
				},
				description: `Drift in the digitization of education is a prime concern at present to enable quality education
          to every individual. Now, there are no geographical barriers to the availability of education and evaluation. 
          Imparting education is easier through digitization but inconvenient to evaluate. In this paper, we propose ‘ASSESS’, 
          a system where the evaluation of subjective answers for an examination becomes easier and convenient. 
          We have even catered to the requirements of specially-abled students online. 
          The diversity in educational courses encouraged us to research how we can efficiently auto-evaluate subjective answers and 
          provide feedback for the purpose of self-analysis. During the pandemic of COVID-19, most of the colleges and organizations
          shifted to the online mode of examinations. These examinations only had MCQs or objective questions which can be easily 
          assessed by the online system. Since such systems can only be used for the evaluation of objective questions, 
          the subjective questions pose a great challenge. In this paper, we directed our research to propose a system
          that gives features like full-length subjective tests, automated subjective answer evaluation using natural 
          language processing and semantic learning, auto-generated feedback for self-improvement of the students,
          visual statistics for both teacher and student after each test, text-to-speech & speech-to-text accessibility 
          options and a fully functional hands-free mode for the specially-abled students with disabilities like 
          sluggish typing, poor eyesight, and amputated hands. Since everything will be automated from the evaluation
          of the answers to providing feedback, there will be minimal stress on the assessors.`
			}
		]
	},
	contact: {
		title: 'Contact me',
		data: [
			{
				link: 'https://github.com/ItsTheKayBee',
				component: Github,
				text: 'ItsTheKayBee'
			},
			{
				link: 'https://www.linkedin.com/in/itsthekaybee/',
				component: LinkedIn,
				text: 'itsthekaybee'
			},
			{
				link: 'mailto:kbohra89@gmail.com',
				component: Email,
				text: 'kbohra89@gmail.com'
			}
		],
		image: {
			url: 'https://via.placeholder.com/200',
			alt: ''
		}
	}
}

const totalExp = getDateDifference(new Date(), EXPERIENCE_START_DATE)

export const statsData: StatsType = {
	stats: [
		{
			title: 'Projects',
			value: portfolioDataObject.projects.data.length
		},
		{
			title: `${totalExp.title} Experience`,
			value: totalExp.value
		},
		{
			title: 'Awards',
			value: portfolioDataObject.achievements.data.length
		},
		{
			title:
				portfolioDataObject.publications.data.length === 1
					? 'Publication'
					: 'Publications',
			value: portfolioDataObject.publications.data.length
		}
	]
}
