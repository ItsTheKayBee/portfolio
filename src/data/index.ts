import Email from "components/icon/Email"
import Github from "components/icon/Github"
import LinkedIn from "components/icon/LinkedIn"
import { PortfolioData } from "./interface"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const portfolioDataObject: PortfolioData = {
  header: [
    {
      title: "Experiences",
      link: "#experiences"
    },
    {
      title: "Skills",
      link: "#skills"
    },
    {
      title: "Projects",
      link: "#projects"
    },
    {
      title: "Achievements",
      link: "#achievements"
    },
    {
      title: "Publications",
      link: "#publications"
    },
    {
      title: "Contact",
      link: "#contact"
    }
  ],
  about: {
    image: {
      url: basePath + "/images/portrait.webp",
      alt: "Kunal's picture"
    },
    data: [
      {
        link: "mailto:kbohra89@gmail.com",
        component: Email,
        text: "kbohra89@gmail.com"
      },
      {
        link: "https://github.com/ItsTheKayBee",
        component: Github,
        text: "ItsTheKayBee"
      },
      {
        link: "https://www.linkedin.com/in/itsthekaybee/",
        component: LinkedIn,
        text: "itsthekaybee"
      }
    ]
  },
  experiences: {
    title: "Experiences",
    data: [
      {
        title: "LazyPay (PayU Finance)",
        subTitle: "Software Engineer (Frontend) | Full Time",
        dates: {
          startDate: new Date("August 2021")
        },
        description: `<ol>
          <li>Used Next.js and performance best practices to improve website load time by ~25%.</li>
          <li>Improved accessibility score across more than 6 projects by ~45%.</li>
          <li>Worked across several projects to deliver multiple high quality products in the stipulated time.</li>
        </ol>`,
        image: {
          alt: "LazyPay logo",
          url: basePath + "/images/experiences/lazypay.webp"
        }
      },
      {
        title: "Arcon",
        subTitle: "Software Development Intern",
        dates: {
          startDate: new Date("December 2019"),
          endDate: new Date("January 2020")
        },
        description: `<ol>
          <li>Worked on security-based applications to test company website.</li> 
          <li>Researched various open-source security softwares that could potentially cut down business expenditure.</li>
        </ol>`,
        image: {
          alt: "Arcon logo",
          url: basePath + "/images/experiences/arcon.webp"
        }
      },
      {
        title: "GREedge",
        subTitle: "External Content Developer",
        dates: {
          startDate: new Date("October 2018"),
          endDate: new Date("December 2018")
        },
        description: "Wrote high quality Letter of Recommendations for MS aspirants for GreEdge.",
        image: {
          alt: "GREedge logo",
          url: basePath + "/images/experiences/greedge.webp"
        }
      }
    ]
  },
  skills: {
    title: "Skills",
    images: [
      {
        alt: "Next.js",
        url: basePath + "/images/skills/next.webp"
      },
      {
        alt: "React",
        url: basePath + "/images/skills/react.webp"
      },
      {
        alt: "Sass",
        url: basePath + "/images/skills/sass.webp"
      },
      {
        alt: "Flutter",
        url: basePath + "/images/skills/flutter.webp"
      },
      {
        alt: "Firebase",
        url: basePath + "/images/skills/firebase.webp"
      },
      {
        alt: "TypeScript",
        url: basePath + "/images/skills/typescript.webp"
      },
      {
        alt: "Python",
        url: basePath + "/images/skills/python.webp"
      },
      {
        alt: "Java",
        url: basePath + "/images/skills/java.webp"
      },
      {
        alt: "Android",
        url: basePath + "/images/skills/android.webp"
      },
      {
        alt: "Blockchain",
        url: basePath + "/images/skills/blockchain.webp"
      }
    ]
  },
  projects: {
    title: "Projects",
    data: [
      {
        title: "Big Picture",
        subTitle: "Apr 2021",
        description: `An app made in Flutter that uses the TMDB API to display useful information about movies and actors. 
          It enables tracking of movies and TV series with a user-friendly, UX-focussed and modern UI.`,
        button: {
          link: "https://github.com/ItsTheKayBee/BigPicture",
          text: "View Project"
        },
        technologies: ["Flutter"],
        image: {
          alt: "",
          url: basePath + "/images/projects/big_picture.webm"
        }
      },
      {
        title: "ASSESS",
        subTitle: "Oct 2020 - Mar 2021",
        description: `A web-app that provides full-length subjective tests for self-assessment and examinations. 
          It reduces the need for manual evaluation by introducing fully automated test grading and feedback 
          that highlights the missing points in the answer and suggests points that can be skipped next time. 
          It also displays user statistics in the form of intuitive charts which can be handy for tracking student's progress.`,
        technologies: ["React", "Sass", "Firebase", "Python", "Flask"],
        button: {
          link: "https://www.linkedin.com/posts/itsthekaybee_google-reactjs-automation-activity-6819224641794564096-y94J",
          text: "View Project"
        },
        image: {
          alt: "",
          url: basePath + "/images/projects/assess.webm"
        }
      },
      {
        title: "3D portfolio",
        subTitle: "Jun 2020 - Aug 2020",
        description: `A beautiful 3D portfolio to showcase my skills. Made in pure javascript using the three.js library.`,
        technologies: ["Javascript", "Three.js"],
        image: {
          alt: "",
          url: basePath + "/images/projects/3d_portfolio.webm"
        },
        button: {
          link: "https://kunalbohra.netlify.app/",
          text: "View Project"
        }
      },
      {
        title: "EssentialsKart - WhatsApp chatbot",
        subTitle: "May 2020",
        description: `A WhatsApp chatbot prototype made in Dialogflow, Python and Twilio API to enable easy and quick
          online ordering of essentials items during quarantine.`,
        technologies: ["Dialogflow", "Twilio", "Flask", "Python", "HTML"],
        image: {
          alt: "",
          url: basePath + "/images/projects/essentials_kart.webm"
        },
        button: {
          link: "https://github.com/ItsTheKayBee/EssentialsKart",
          text: "View Project"
        }
      },
      {
        title: "InstaNote",
        subTitle: "Apr 2020 - May 2020",
        description: `An Android app that swiftly pulls top 3 web results for any search topic and 
          saves them in the form of notes for later reference. A user can edit and modify the notes
          as per his choice and use them for studying during exams.`,
        technologies: ["Java", "Android", "Web Scraping"],
        image: {
          alt: "",
          url: basePath + "/images/projects/instanote.webm"
        },
        button: {
          link: "https://github.com/ItsTheKayBee/InstaNote",
          text: "View Project"
        }
      },
      {
        title: "Xervixx",
        subTitle: "Jun 2019 - Jul 2019",
        description: `A full-stack website prototype with a gamified interface to cater the users post loan disbursal 
          and make collections rewarding. This included a stock market dream fantasy game which users can play to get
          on the leaderboard and win prizes.`,
        technologies: ["PHP", "MySQL", "CSS", "Javascript"],
        image: {
          alt: "",
          url: basePath + "/images/projects/xervixx.webm"
        },
        button: {
          link: "https://github.com/ItsTheKayBee/Xervixx",
          text: "View Project"
        }
      }
    ]
  },
  achievements: {
    title: "Achievements",
    data: [
      {
        title: "Runner's Up",
        subTitle: "KJSCE Hack 5.0 - Apr 2021",
        description: `Bagged the second place for our project 'ASSESS' at KJSCE Hack 5.0, 
          a national-level hackathon with more than 50 participating teams.`,
        image: {
          alt: "Runner's up",
          url: basePath + "/images/achievements/hack.webp"
        }
      },
      {
        title: "Best Blockchain Team",
        subTitle: "DotSlash Hackathon - Jan 2020",
        description: `Won the best blockchain team for our project 'FundEasy' at the DotSlash Hackathon, NIT Surat. 
          We also qualified for the national finals of the International Blockchain Olympiad.`,
        image: {
          alt: "Winner",
          url: basePath + "/images/achievements/blockchain.webp"
        }
      },
      {
        title: "Winner",
        subTitle: "Zero Energy Building competition - Oct 2018",
        description: `Won the Zero Energy building competition by building a 
          strong presentation detailing all the prospects of a zero energy building on the KJSCE campus`,
        image: {
          alt: "Winner",
          url: basePath + "/images/achievements/zeb.webp"
        }
      },
      {
        title: "Winner",
        subTitle: `Why Don't YouTube? - Feb 2018`,
        description: `Aced the social media marketing competition that involved making a video and marketing 
          it across various digital platforms and scoring the maximum number of views, likes and shares.`,
        image: {
          alt: "Winner",
          url: basePath + "/images/achievements/youtube.webp"
        }
      },
      {
        title: "Runner's Up",
        subTitle: "Chefpreneur - Jan 2018",
        description:
          "Bagged the second place in Chefpreneur competition which was a cooking and marketing competition at KJSCE.",
        image: {
          alt: "Runner's up",
          url: basePath + "/images/achievements/chefpreneur.webp"
        }
      }
    ]
  },
  publications: {
    title: "Publications",
    data: [
      {
        title: "Automated Subjective Answer Evaluation Using Semantic Learning",
        subTitle: "Elsevier-SSRN Conference Proceedings",
        button: {
          text: "View Research",
          link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3861851"
        },
        image: {
          url: basePath + "/images/publications/assess.webp",
          alt: "Assess image"
        },
        description: `Drift in the digitization of education is a prime concern at present to enable quality education
          to every individual. Now, there are no geographical barriers to the availability of education. 
          Imparting education is easier through digitization but inconvenient to evaluate. In this paper, we propose 
          a system where the evaluation of subjective answers for an examination becomes much easier and convenient,
          also keeping in mind the requirements of specially-abled students online.`
      },
      {
        title: "Application of Blockchain Technology to Make Smart Cities Smarter",
        subTitle:
          "Applications of Blockchain and Big IoT Systems: Digital Solutions for Diverse Industries",
        button: {
          text: "View Research",
          link: "https://www.appleacademicpress.com/applications-of-blockchain-and-big-iot-systems-digital-solutions-for-diverse-industries/9781774637456"
        },
        image: {
          url: basePath + "/images/publications/blockchain.webp",
          alt: "Assess image"
        },
        description: `Today, urban areas face massive population bursts. A smart city utilizes innovations to coordinate 
          and oversee physical, social, and business aspects so as to offer better assistance to its occupants while guaranteeing
          productive and ideal use of accessible assets. This paper highlights the use of blockchain and breaks down
          how it can be used for making cities more smarter and efficient.`
      }
    ]
  },
  contact: {
    title: "Contact me",
    description: `<p>Hey there! I am Kunal. I love coding and experimenting with new technologies to develop powerful
      and creative solutions. Be it apps or websites, I have built several of them, to learn and hone my skills 
      and become a better developer everyday.</p><br/><p>Well, if I sound interesting to you, let's connect via any social channel!</p>`,
    data: [
      {
        link: "https://github.com/ItsTheKayBee",
        component: Github,
        text: "ItsTheKayBee"
      },
      {
        link: "https://www.linkedin.com/in/itsthekaybee/",
        component: LinkedIn,
        text: "itsthekaybee"
      },
      {
        link: "mailto:kbohra89@gmail.com",
        component: Email,
        text: "kbohra89@gmail.com"
      }
    ],
    image: {
      url: basePath + "/images/contact.webp",
      alt: ""
    },
    resume: {
      link: "https://drive.google.com/file/d/13SPCHZxcmYYO5KQNNAkCLLIa0Ebjf6kc/view?usp=sharing"
    }
  }
}
