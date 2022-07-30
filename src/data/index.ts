import Email from 'components/icon/Email'
import Github from 'components/icon/Github'
import LinkedIn from 'components/icon/LinkedIn'
import { PortfolioData } from './interface'

export const portfolioDataObject: PortfolioData = {
	header: [
		{
			title: 'Experiences',
			link: '#experiences'
		},
		{
			title: 'Skills',
			link: '#skills'
		},
		{
			title: 'Projects',
			link: '#projects'
		},
		{
			title: 'Achievements',
			link: '#achievements'
		},
		{
			title: 'Publications',
			link: '#publications'
		},
		{
			title: 'Contact',
			link: '#contact'
		}
	],
	about: {
		image: {
			url: '/images/portrait.webp',
			alt: 'My picture'
		},
		data: [
			{
				link: 'mailto:kbohra89@gmail.com',
				component: Email,
				text: 'kbohra89@gmail.com'
			},
			{
				link: 'https://github.com/ItsTheKayBee',
				component: Github,
				text: 'ItsTheKayBee'
			},
			{
				link: 'https://www.linkedin.com/in/itsthekaybee/',
				component: LinkedIn,
				text: 'itsthekaybee'
			}
		]
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
					url: '/images/experiences/lazypay.webp'
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
					url: '/images/experiences/arcon.webp'
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
					url: '/images/experiences/greedge.webp'
				}
			}
		]
	},
	skills: {
		title: 'Skills',
		images: [
			{
				alt: 'Python',
				url: '/images/skills/python.webp'
			},
			{
				alt: 'React',
				url: '/images/skills/react.webp'
			},
			{
				alt: 'Next.js',
				url: '/images/skills/next.webp'
			},
			{
				alt: 'Sass',
				url: '/images/skills/sass.webp'
			},
			{
				alt: 'Java',
				url: '/images/skills/java.webp'
			},
			{
				alt: 'Flutter',
				url: '/images/skills/flutter.webp'
			},
			{
				alt: 'Firebase',
				url: '/images/skills/firebase.webp'
			},
			{
				alt: 'TypeScript',
				url: '/images/skills/typescript.webp'
			},
			{
				alt: 'Android',
				url: '/images/skills/android.webp'
			},
			{
				alt: 'Blockchain',
				url: '/images/skills/blockchain.webp'
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
					url: '/images/projects/big_picture.webm'
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
					url: '/images/projects/assess.webm'
				}
			},
			{
				title: '3D portfolio',
				subTitle: 'Jun 2020 - Aug 2020',
				description: `A beautiful 3D portfolio to showcase my skills. Made in pure javascript using the three.js library.`,
				technologies: ['Javascript', 'Three.js'],
				image: {
					alt: '',
					url: '/images/projects/3d_portfolio.webm'
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
					url: '/images/projects/essentials_kart.webm'
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
					url: '/images/projects/instanote.webm'
				},
				button: {
					link: 'https://github.com/ItsTheKayBee/InstaNote',
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
					url: '/images/projects/xervixx.webm'
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
					url: '/images/achievements/hack.webp'
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
					url: '/images/achievements/blockchain.webp'
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
					url: '/images/achievements/zeb.webp'
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
					url: '/images/achievements/youtube.webp'
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
					url: '/images/achievements/chefpreneur.webp'
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
					url: '/images/publications/assess.webp',
					alt: 'Assess image'
				},
				description: `Drift in the digitization of education is a prime concern at present to enable quality education
          to every individual. Now, there are no geographical barriers to the availability of education and evaluation. 
          Imparting education is easier through digitization but inconvenient to evaluate. In this paper, we propose ‘ASSESS’, 
          a system where the evaluation of subjective answers for an examination becomes easier and convenient. 
          We have even catered to the requirements of specially-abled students online.`
			},
			{
				title: 'Blockchain',
				subTitle: 'Elsevier-SSRN Conference Proceedings',
				button: {
					text: 'View Research',
					link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3861851'
				},
				image: {
					url: '/images/publications/blockchain.webp',
					alt: 'Assess image'
				},
				description: `Drift in the digitization of education is a prime concern at present to enable quality education
          to every individual. Now, there are no geographical barriers to the availability of education and evaluation. 
          Imparting education is easier through digitization but inconvenient to evaluate. In this paper, we propose ‘ASSESS’, 
          a system where the evaluation of subjective answers for an examination becomes easier and convenient. 
          We have even catered to the requirements of specially-abled students online.`
			}
		]
	},
	contact: {
		title: 'Contact me',
		description: `I am a highly motivated and enthusiastic Software Developer with a keen interest in full 
			stack development. I have worked on modern technologies like React.js, Next.js, Flutter, Python, etc.
			I like to explore new technologies and I am passionate about trying out new experiences. I have built
			several websites and apps in the process and I am always looking to hone my skills further in order to
			become a better Software Development Engineer.`,
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
			url: '/images/contact.webp',
			alt: ''
		},
		resume: {
			link: 'https://drive.google.com/file/d/13SPCHZxcmYYO5KQNNAkCLLIa0Ebjf6kc/view?usp=sharing'
		}
	}
}
