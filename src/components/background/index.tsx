import { ROUTES } from 'helpers/constants'
import { useRouter } from 'next/router'
import { RefObject, useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import {
	ABOUT,
	ACHIEVEMENTS,
	BACKGROUND,
	CLOUDS,
	CONTACT,
	EXPERIENCE,
	GROUND,
	GROUND_ITEMS,
	MOON,
	MOON1,
	PROJECTS,
	PUBLICATIONS,
	SKILLS,
	STARS
} from './objects'

const Background = () => {
	const container = useRef<HTMLDivElement>(null)
	const skillsRef = useRef<SVGGElement>(null)
	const experienceRef = useRef<SVGGElement>(null)
	const achievementsRef = useRef<SVGGElement>(null)

	const [windowDims, setWindow] = useState({
		innerHeight: 0,
		innerWidth: 0,
		scrollY: 0
	})
	const [skyHue, updateSkyHue] = useState(0)
	const [groundHue, updateGroundHue] = useState(0)
	const [totalWidth, setTotalWidth] = useState(0)
	const [scrollPosition, setScrollPosition] = useState(0)

	const ease = 0.3

	const lerp = (start: number, end: number, t: number) =>
		start * (1 - t) + end * t

	useEffect(() => {
		setWindow(window)
		setTotalWidth((5757 * window.innerHeight) / 1080)
	}, [])

	const scroll = (e: any) => {
		container.current!.scrollLeft = lerp(
			container.current!.scrollLeft,
			container.current?.scrollLeft + e.deltaY,
			ease
		)
		setScrollPosition(container.current?.scrollLeft ?? 0)

		updateSkyHue((container.current!.scrollLeft / totalWidth) * 400)
		updateGroundHue((container.current!.scrollLeft / totalWidth) * 400)
	}

	const getSpeed = (factor: number) =>
		`translateX(${scrollPosition * factor}px)`

	const router = useRouter()

	const inView = (elem: RefObject<SVGElement>) => {
		const properties = elem.current?.getBoundingClientRect() ?? {
			left: 0,
			width: 0
		}
		const left = properties.left
		const elemSize = -properties.width

		return left >= 0 && left - elemSize <= windowDims.innerWidth
	}

	const route = (href: string) => {
		setTimeout(() => {
			router.push(href)
		}, 2000)
	}

	return (
		<div className={styles.bgWrapper} ref={container} onWheel={scroll}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				width={totalWidth}
				height={windowDims.innerHeight}
				viewBox='0 0 5757 1080'
				className={styles.svg}
			>
				<defs>
					<filter
						id='filter'
						x='15796'
						y='926'
						width='726'
						height='120'
						filterUnits='userSpaceOnUse'
					>
						<feOffset result='offset' dy='4' in='SourceAlpha' />
						<feGaussianBlur result='blur' stdDeviation='3.162' />
						<feFlood result='flood' floodOpacity='0.5' />
						<feComposite result='composite' operator='in' in2='blur' />
						<feBlend result='blend' in='SourceGraphic' />
					</filter>
					<filter
						id='filter2'
						x='16589'
						y='474'
						width='478'
						height='109'
						filterUnits='userSpaceOnUse'
					>
						<feOffset result='offset' dy='4' in='SourceAlpha' />
						<feGaussianBlur result='blur' stdDeviation='3.162' />
						<feFlood result='flood' floodOpacity='0.5' />
						<feComposite result='composite' operator='in' in2='blur' />
						<feBlend result='blend' in='SourceGraphic' />
					</filter>
					<filter
						id='filter3'
						x='14094'
						y='863'
						width='380'
						height='100'
						filterUnits='userSpaceOnUse'
					>
						<feOffset result='offset' dy='4' in='SourceAlpha' />
						<feGaussianBlur result='blur' stdDeviation='3.162' />
						<feFlood result='flood' floodOpacity='0.5' />
						<feComposite result='composite' operator='in' in2='blur' />
						<feBlend result='blend' in='SourceGraphic' />
					</filter>
					<filter
						id='filter4'
						x='14746'
						y='457'
						width='732'
						height='114'
						filterUnits='userSpaceOnUse'
					>
						<feOffset result='offset' dy='4' in='SourceAlpha' />
						<feGaussianBlur result='blur' stdDeviation='3.162' />
						<feFlood result='flood' floodOpacity='0.5' />
						<feComposite result='composite' operator='in' in2='blur' />
						<feBlend result='blend' in='SourceGraphic' />
					</filter>
					<filter
						id='filter5'
						x='12671'
						y='886'
						width='450'
						height='100'
						filterUnits='userSpaceOnUse'
					>
						<feOffset result='offset' dy='4' in='SourceAlpha' />
						<feGaussianBlur result='blur' stdDeviation='3.162' />
						<feFlood result='flood' floodOpacity='0.5' />
						<feComposite result='composite' operator='in' in2='blur' />
						<feBlend result='blend' in='SourceGraphic' />
					</filter>
					<filter
						id='filter6'
						x='13176'
						y='258'
						width='327'
						height='88'
						filterUnits='userSpaceOnUse'
					>
						<feOffset result='offset' dy='4' in='SourceAlpha' />
						<feGaussianBlur result='blur' stdDeviation='3.162' />
						<feFlood result='flood' floodOpacity='0.5' />
						<feComposite result='composite' operator='in' in2='blur' />
						<feBlend result='blend' in='SourceGraphic' />
					</filter>
					<filter
						id='filter7'
						x='11914'
						y='473'
						width='561'
						height='99'
						filterUnits='userSpaceOnUse'
					>
						<feOffset result='offset' dy='4' in='SourceAlpha' />
						<feGaussianBlur result='blur' stdDeviation='3.162' />
						<feFlood result='flood' floodOpacity='0.5' />
						<feComposite result='composite' operator='in' in2='blur' />
						<feBlend result='blend' in='SourceGraphic' />
					</filter>
				</defs>
				<g id='ab2'>
					<g id='Background'>
						<image
							id='bg'
							width='5757'
							height='1080'
							style={{ filter: `hue-rotate(${skyHue}deg)` }}
							xlinkHref={BACKGROUND}
						/>
						<image
							id='stars'
							className={styles.stars}
							x='13'
							y='21'
							width='5668'
							height='851'
							xlinkHref={STARS}
							style={{ transform: getSpeed(0.7) }}
						/>
						<image
							id='moon1'
							className={styles.moon1}
							x='1005'
							y='215'
							width='112'
							height='111'
							xlinkHref={MOON1}
							style={{ transform: getSpeed(1.025) }}
						/>
						<image
							id='moon'
							className={styles.moon}
							x='698'
							y='270'
							width='266'
							height='252'
							xlinkHref={MOON}
							style={{ transform: getSpeed(1) }}
						/>
						<image
							id='clouds'
							className={styles.clouds}
							y='6'
							width='5757'
							height='1074'
							xlinkHref={CLOUDS}
							style={{ transform: getSpeed(0.75) }}
						/>
					</g>
					<g id='Ground'>
						<image
							id='ground-2'
							data-name='ground'
							className={styles.ground}
							y='711'
							width='5757'
							height='369'
							xlinkHref={GROUND}
							style={{ filter: `hue-rotate(${groundHue}deg)` }}
						/>
						<image
							id='ground_items'
							className={styles.groundItems}
							x='247'
							y='518'
							width='5453'
							height='562'
							xlinkHref={GROUND_ITEMS}
							style={{ filter: `hue-rotate(${groundHue}deg)` }}
						/>
					</g>
					<g
						id='Publications'
						className={`${styles.publications} ${styles.objects}`}
						onClick={() => route(ROUTES.publications)}
					>
						<image
							id='publications-2'
							data-name='publications'
							className={styles.objectImage}
							x='4222'
							y='740'
							width='445'
							height='272'
							xlinkHref={PUBLICATIONS}
						/>
						<path
							id='PUBLICATIONS-3'
							data-name='PUBLICATIONS'
							className={styles.cls5}
							d='M15845.1,936.815c-13.6-2.948-25.6-4.942-25.6-4.941-4.6,19.3-9.1,38.606-13.7,57.909,7.6,1.8,15.3,3.547,22.9,5.231,1.4-6.226,2.8-12.453,4.1-18.679,0,0,4.3,1.375,7.8,2.122,14.8,3.182,25.2-3.476,27.6-15.562C15870.6,950.777,15863.7,940.846,15845.1,936.815Zm-8.9,24.162c0.7-3.044,1.3-6.088,2-9.132,1.2,0.252,2.3.5,3.4,0.751,3,0.653,4.7,3.188,4.2,5.683s-3.1,4.111-6.1,3.454C15838.5,961.482,15837.4,961.23,15836.2,960.977Zm65.8,28.061c-3.9-.679-6.4-4.154-5.6-8.757,1.8-10.463,3.7-20.927,5.5-31.39-7.4-1.308-14.8-2.673-22.1-4.095-2.1,10.434-4.1,20.868-6.1,31.3-3.2,16.673,6.9,30.812,24.7,33.882,17.9,3.07,32.2-6.87,34.6-23.678l4.8-31.517q-11.1-1.687-22.2-3.544c-1.8,10.481-3.5,20.961-5.3,31.442C15909.6,987.294,15906,989.718,15902,989.038Zm84.1,0.486c0,0.013,11.6-.825,12.7-10.982,0.9-8.9-6-17.241-25.3-19.653-13.3-1.676-25.4-2.585-25.4-2.585-2.8,19.632-5.7,39.263-8.5,58.9,0,0,12.4,2.66,26.7,4.46,22.3,2.79,31.2-4.1,32.2-13.37,1.3-12.659-12.5-16.325-12.5-16.344A0.662,0.662,0,0,1,15986.1,989.524Zm-17.6-15.843c1.1,0.13,2.1.259,3.1,0.388,3,0.383,4.5,2.283,4.3,4.392-0.3,2.109-2.2,3.584-5.3,3.2l-3-.39Zm-0.3,30.8c-1.8-.22-3.6-0.45-3.6-0.45,0.4-2.81.8-5.618,1.1-8.428,1.2,0.151,2.4.3,3.5,0.449,3.6,0.444,5.1,2.344,4.8,4.879S15971.7,1004.93,15968.2,1004.48Zm64.9-38.411c-7.4-.638-14.9-1.333-22.3-2.085q-3,29.6-6,59.206c15.8,1.59,31.6,2.94,47.5,4.04,0.4-6.5.9-13,1.3-19.5-7.9-.55-15.9-1.17-23.9-1.85C16030.9,992.608,16032,979.339,16033.1,966.069Zm52.6,3.552c-7.5-.371-14.9-0.8-22.4-1.284q-1.95,29.689-3.9,59.383,11.7,0.75,23.4,1.33C16083.8,1009.24,16084.7,989.432,16085.7,969.621Zm7.3,30.127c-0.8,17.4,13,31.672,31.9,32.092,17.1,0.36,25.3-9.02,25.3-9-3.6-5.4-7.1-10.82-10.6-16.25,0.1,0-5.3,4.61-11.5,4.49-6.3-.13-10.6-4.51-10.4-10.46s4.7-10.067,10.8-9.942,11.3,4.862,11.3,4.863c3.6-5.339,7.1-10.69,10.6-16.054,0-.016-7.7-9.342-24.1-9.686C16108.3,969.405,16093.9,982.332,16093,999.748Zm107.1-28.889q-14.7.411-29.4,0.528-8.55,29.823-17.9,59.543,13.05,0.045,26.1-.12c0.5-2.84,1.1-5.68,1.6-8.52,3.9-.06,7.8-0.13,11.6-0.21,0.7,2.82,1.4,5.64,2,8.45q13.05-.285,26.1-0.81C16220,1029.76,16200,971.235,16200.1,970.859Zm-17.1,37.791c0.9-5.12,1.9-10.238,2.8-15.356,1.1,5.082,2.3,10.166,3.4,15.236C16187.1,1008.58,16185.1,1008.61,16183,1008.65Zm32.2-38.29c0.2,6.512.5,13.025,0.7,19.537,5.6-.212,11.1-0.454,16.7-0.727,0.6,13.3,1.3,26.6,1.9,39.9q11.7-.57,23.4-1.32c-0.9-13.29-1.8-26.58-2.6-39.874,5.5-.358,11-0.746,16.6-1.165l-1.5-19.5Q16242.8,969.3,16215.2,970.36Zm84.5-5.657c-7.5.715-15,1.373-22.4,1.974l4.8,59.313c7.7-.63,15.5-1.31,23.2-2.05C16303.4,1004.19,16301.6,984.448,16299.7,964.7Zm55.4,23.641a9.734,9.734,0,1,1-10.9-8.888C16349.4,978.806,16354.3,982.444,16355.1,988.344Zm24.5-3.424c-2.6-17.242-18.3-28.589-38-26.13-19.6,2.452-32,17.305-30.3,34.663,1.7,17.327,17.4,29.487,38,26.917C16369.9,1017.78,16382.2,1002.13,16379.6,984.92Zm51.5,21.69c8.5-1.54,17.1-3.16,25.7-4.85-3.9-19.462-7.7-38.92-11.6-58.378-7.3,1.459-14.7,2.861-22.1,4.207,1.5,8.642,3.1,17.284,4.7,25.926q-9.75-11.62-19.2-23.36c-8.3,1.417-16.6,2.764-24.8,4.04q4.5,29.4,9,58.8c7.8-1.19,15.5-2.43,23.2-3.74-1.5-8.66-3-17.323-4.4-25.983Q16421.2,995.006,16431.1,1006.61Zm51.8-26.8a24.263,24.263,0,0,1-15.9-2.242c-1.9,4.735-3.9,9.468-5.8,14.2,0-.022,10,8.471,29.4,4.2,15.5-3.432,23-14.892,20.7-24.383-4.4-18.123-27.5-12.782-28.5-16.988-0.2-1.245.8-2.774,2.9-3.255,6-1.344,12.2,2.009,12.2,2.009,1.8-4.772,3.5-9.547,5.2-14.323,0-.011-9.8-7.228-25-3.838-14.8,3.274-22.3,14.3-20.4,23.89,3.7,18.388,27.3,13.386,28.2,17.479C16486.2,977.8,16485.1,979.337,16482.9,979.814Z'
							transform='translate(-11714)'
						/>
					</g>
					<g
						id='Contact'
						style={{ transform: getSpeed(-0.1) }}
						onClick={() => route(ROUTES.contact)}
						className={`${styles.contact} ${styles.objects}`}
					>
						<image
							id='contact-2'
							data-name='contact'
							x='4702'
							className={styles.objectImage}
							y='58'
							width='810'
							height='579'
							xlinkHref={CONTACT}
						/>
						<path
							id='CONTACT-3'
							data-name='CONTACT'
							className={styles.cls6}
							d='M16599.3,508.961c-4.7,16.78,6.3,33.936,25.7,38.357,17.4,3.955,27.5-3.712,27.5-3.686-2.6-6-5.1-12.017-7.6-18.038,0,0-6.3,3.448-12.6,2.031s-9.8-6.627-8.4-12.41,6.8-8.87,12.9-7.493,10.4,7.057,10.4,7.06c4.6-4.522,9.2-9.08,13.7-13.673,0-.033-6-10.62-22.1-14.284C16621,482.761,16603.9,492.149,16599.3,508.961Zm105.5,21.59a9.917,9.917,0,1,1-8.3-11.532A9.975,9.975,0,0,1,16704.8,530.551Zm25.1,3.184c1.8-17.354-10.5-32.292-30.2-35.3s-36,7.527-39.5,24.636c-3.4,17.057,8.7,33.417,30.1,36.7C16711.7,563.035,16728.1,551.039,16729.9,533.735Zm45.9,33.754q13.5,0.78,27,1.159c0.6-19.827,1.1-39.654,1.7-59.481-7.6-.212-15.1-0.524-22.6-0.937l-1.5,26.313c-4.6-9.049-9-18.134-13.3-27.251q-12.6-.909-25.2-2.193-3,29.6-6.1,59.2c8.1,0.821,16.1,1.534,24.2,2.141,0.7-8.759,1.3-17.519,2-26.278Q16768.6,553.877,16775.8,567.489Zm37.4-58.122c-0.1,6.516-.3,13.033-0.4,19.549,5.7,0.1,11.3.147,16.9,0.138,0.1,13.318.1,26.635,0.1,39.953,8.1-.012,16.2-0.132,24.2-0.359-0.3-13.312-.7-26.625-1.1-39.937,5.6-.159,11.3-0.372,16.9-0.64l-0.9-19.53C16850.3,509.424,16831.7,509.7,16813.2,509.367Zm100.4-4.137c-9.8.989-19.6,1.806-29.5,2.451q-6.9,30.273-15.2,60.427,13.5-.6,27-1.6l1.2-8.616q6-.456,12-0.993c0.8,2.767,1.7,5.533,2.6,8.3,9-.824,17.9-1.781,26.9-2.872C16938.2,562.422,16913.4,505.655,16913.6,505.23Zm-14.8,38.887c0.7-5.169,1.3-10.338,1.9-15.507,1.5,5,2.9,9.99,4.4,14.98Q16901.95,543.865,16898.8,544.117Zm40.7-11.884c2.1,17.285,18.6,29,38.1,25.771,17.6-2.95,24.1-13.871,24-13.836-4.6-4.572-9.3-9.18-13.8-13.822,0,0-4.5,5.592-10.9,6.658-6.3,1.068-11.5-2.438-12.4-8.317s2.9-10.76,9-11.8c6.2-1.038,12.3,2.588,12.3,2.587q3.9-8.913,7.5-17.856c0-.024-9.5-7.565-25.8-4.835C16949.5,499.765,16937.4,514.915,16939.5,532.233Zm57.4-39.561,3.9,19.165c5.5-1.121,11.1-2.3,16.6-3.528l8.7,39q11.85-2.643,23.7-5.607c-3.2-12.919-6.4-25.838-9.7-38.757q8.25-2.07,16.5-4.306l-5.1-18.87Q17024.35,487.133,16996.9,492.672Z'
							transform='translate(-11714)'
						/>
					</g>
					<g
						id='Achievements'
						onClick={() => route(ROUTES.achievements)}
						style={{ transform: getSpeed(-0.2) }}
						className={`${styles.achievements} ${styles.objects}`}
					>
						<image
							id='achievements-2'
							data-name='achievements'
							x='3070'
							y='77'
							width='652'
							className={styles.objectImage}
							height='542'
							xlinkHref={ACHIEVEMENTS}
						/>
						<path
							id='ACHIEVEMENTS-3'
							data-name='ACHIEVEMENTS'
							className={styles.cls8}
							d='M14811.9,469.341c-9-1.883-18.1-3.853-27.1-5.908q-14.4,25.443-29.4,50.65,12,2.867,24,5.538c1.1-2.48,2.2-4.961,3.4-7.443,3.5,0.79,7.1,1.568,10.7,2.332v8.177q12,2.559,24,4.922C14817.3,527.6,14811.7,469.662,14811.9,469.341Zm-23.9,30.88c2-4.479,3.9-8.96,5.9-13.445-0.1,4.9-.1,9.793-0.2,14.69Q14790.85,500.85,14788,500.221Zm37.4,0.389c-3.2,16.079,7.6,31.285,25.2,34.332,15.9,2.737,24.8-4.837,24.8-4.824q-3.9-8.293-7.5-16.6s-5.7,3.534-11.5,2.542c-5.7-.991-9.1-5.67-8.2-11.181,1-5.513,5.8-8.719,11.5-7.742s9.8,6.118,9.9,6.119c4-4.463,8.1-8.942,12.1-13.438,0-.016-5.9-9.79-21.1-12.415C14843.8,474.49,14828.6,484.515,14825.4,500.61Zm84.9-14.25q-10.5-1.451-21-3.053l-8.4,55.356c7.2,1.109,14.5,2.165,21.7,3.169,0.9-6.339,1.8-12.679,2.6-19.019,4.4,0.611,8.9,1.2,13.3,1.773-0.9,6.347-1.7,12.694-2.5,19.041,7.3,0.941,14.5,1.829,21.8,2.665,2.1-18.545,4.3-37.09,6.4-55.635q-10.5-1.208-21-2.567c-0.8,6.347-1.6,12.694-2.5,19.041-4.3-.564-8.7-1.148-13-1.752C14908.5,499.04,14909.4,492.7,14910.3,486.36Zm64.6,7.508q-10.5-.988-21-2.127l-6,55.675c7.2,0.788,14.5,1.524,21.8,2.208C14971.4,531.039,14973.2,512.453,14974.9,493.868Zm28.2,38.473q10.8,0.788,21.6,1.42l0.9-15.973q-10.65-.626-21.3-1.4l0.3-3.989c7.6,0.557,15.2,1.056,22.9,1.5l0.9-15.974q-21.9-1.258-43.8-3.168l-4.8,55.789q23.55,2.055,47.1,3.384l0.9-15.975c-8.3-.47-16.7-1.008-25-1.615l0.3-3.99h0Zm30.2-34.153q6.3,28.389,13.4,56.721c9.5,0.415,19.1.741,28.6,0.978q9-27.787,17.2-55.675c-7.8-.111-15.7-0.284-23.5-0.52q-3.6,16.3-7.2,32.586c-1.7-11-3.4-22-5-33C15049,498.976,15041.1,498.613,15033.3,498.188Zm86.2,38.16q10.8-.043,21.6-0.24l-0.3-16c-7.1.13-14.2,0.209-21.4,0.238v-4c7.7-.031,15.3-0.12,23-0.268l-0.3-16c-14.6.282-29.3,0.348-43.9,0.2-0.2,18.666-.4,37.332-0.5,56,15.7,0.162,31.4.082,47.2-.239-0.2-5.332-.3-10.665-0.4-16-8.3.17-16.7,0.272-25,.3v-4Zm82.6,17.453q4.2-15.867,8.1-31.753c0.7,10.378,1.4,20.757,2,31.136q10.95-.7,21.9-1.565c-1.5-18.61-2.9-37.219-4.4-55.829q-15,1.18-30,2.056c-2.5,10.3-5.1,20.589-7.7,30.874-3.7-9.955-7.4-19.923-10.9-29.9-10.1.457-20.1,0.813-30.1,1.067,0.5,18.661,1,37.322,1.4,55.983q10.95-.277,21.9-0.712l-1.2-31.176q5.55,15.392,11.4,30.742C15190.3,554.448,15196.2,554.141,15202.1,553.8Zm62-24.933c7.1-.717,14.3-1.484,21.5-2.3l-1.8-15.9q-10.65,1.217-21.3,2.28c-0.2-1.327-.3-2.654-0.4-3.981,7.6-.761,15.2-1.581,22.9-2.46-0.7-5.3-1.3-10.6-1.9-15.9-14.5,1.678-29.1,3.139-43.7,4.383l4.8,55.8c15.7-1.339,31.4-2.92,47-4.742l-1.8-15.893q-12.45,1.449-24.9,2.692C15264.3,531.522,15264.2,530.2,15264.1,528.868Zm70.7,11.48c8.1-1.176,16.1-2.417,24.2-3.723q-4.5-27.641-8.9-55.282-10.5,1.692-21,3.233l3.6,24.536c-5.8-7.5-11.6-15.024-17.3-22.585q-11.7,1.61-23.4,3.032c2.3,18.531,4.5,37.062,6.8,55.593,7.2-.883,14.5-1.817,21.7-2.8l-3.3-24.575C15323,525.331,15328.8,532.856,15334.8,540.348Zm21.7-60.06,3,18.151c5.2-.858,10.3-1.742,15.5-2.653,2.1,12.341,4.3,24.683,6.5,37.024,7.2-1.278,14.4-2.609,21.7-3.992-2.4-12.309-4.8-24.618-7.1-36.927,5.1-.986,10.2-2,15.4-3.039-1.3-6.011-2.5-12.022-3.7-18.033Q15382.15,476.009,15356.5,480.288Zm83.6,25.4a22.955,22.955,0,0,1-15-2.092q-2.55,6.689-5.4,13.369c0-.019,9.4,7.951,27.7,3.917,14.5-3.236,21.5-14.011,19.4-22.944-4.1-17.06-25.9-12.028-26.8-15.982-0.3-1.172.7-2.612,2.7-3.065,5.6-1.269,11.5,1.886,11.5,1.886q2.4-6.738,4.8-13.48c0-.009-9.2-6.8-23.5-3.6-13.9,3.1-20.9,13.486-19.1,22.511,3.5,17.294,25.6,12.56,26.5,16.414,0.3,1.171-.7,2.617-2.8,3.067h0Z'
							transform='translate(-11714)'
						/>
					</g>
					<g
						id='Skills'
						onClick={() => route(ROUTES.skills)}
						ref={skillsRef}
						className={`${styles.skills} ${styles.objects}`}
					>
						<image
							id='skills-2'
							data-name='skills'
							x='2289'
							className={styles.objectImage}
							y='573'
							width='561'
							height='361'
							xlinkHref={SKILLS}
						/>
						<path
							id='SKILLS-3'
							data-name='SKILLS'
							className={styles.cls7}
							d='M14131.2,915.482a27.043,27.043,0,0,1-15.1-9.226c-4,3.705-8.1,7.379-12.2,11.022,0-.068,6.2,12.788,28.1,17.176,17.4,3.417,30-4.74,31.5-14.945,3-19.439-22.4-23.943-21.5-28.486,0.3-1.325,1.9-2.375,4.3-1.932,6.5,1.24,11.3,7.076,11.3,7.079q5.55-5.878,11.1-11.839c-0.1-.037-6.8-10.994-23.1-14.154-15.8-3.113-28,4.082-30.4,14.167-4.7,19.386,21.3,24.981,20.4,29.265C14135.4,914.933,14133.6,915.973,14131.2,915.482Zm111-31.694c-9.3-.546-18.5-1.267-27.7-2.165q-6.75,12-13.8,23.878c0.9-8.346,1.8-16.693,2.8-25.039-8-.9-15.9-1.933-23.9-3.1-3,20.777-6.1,41.554-9.1,62.331,8.6,1.265,17.3,2.387,25.9,3.365,1-8.347,1.9-16.693,2.8-25.04,3.6,8.856,7.3,17.689,11.2,26.5q15,1.424,30,2.276c-6.4-10.88-12.5-21.838-18.4-32.863C14229,903.974,14235.7,893.924,14242.2,883.788Zm32.3,1.191q-12-.176-24-0.747l-3,62.926c8.6,0.414,17.3.685,26,.812C14273.8,926.973,14274.2,905.976,14274.5,884.979Zm36.9-.4q-12,.435-24,0.473c0.1,21,.1,42,0.2,63q26.55-.084,53.1-1.959c-0.5-6.883-.9-13.766-1.4-20.648q-13.2.93-26.4,1.408Zm58-4.435c-7.9.93-15.9,1.729-23.9,2.395,1.8,20.926,3.5,41.853,5.3,62.779,17.6-1.475,35.3-3.548,52.9-6.217-1.1-6.822-2.1-13.643-3.2-20.465-8.7,1.325-17.4,2.5-26.2,3.52C14372.7,908.153,14371.1,894.149,14369.4,880.145Zm62.3,36.776a27.169,27.169,0,0,1-17.5-2.766c-2.3,4.957-4.6,9.9-7.1,14.842,0-.055,10.6,9.449,32.5,5.163,17.4-3.487,26-15.816,23.5-25.844-4.7-19.108-29.9-13.581-30.8-18.127-0.2-1.324.9-2.926,3.2-3.4,6.5-1.339,13.2,2.232,13.2,2.23q3-7.579,5.7-15.177c0-.025-10.4-7.584-26.7-4.29-15.8,3.158-24.3,14.452-22.7,24.7,3.1,19.693,29.1,14.991,30,19.267C14435.3,914.838,14434.1,916.452,14431.7,916.921Z'
							transform='translate(-11714)'
						/>
					</g>

					<g
						id='Projects'
						className={`${styles.projects} ${styles.objects}`}
						onClick={() => route(ROUTES.projects)}
					>
						<image
							id='projects-2'
							data-name='projects'
							x='1031'
							y='590'
							className={styles.objectImage}
							width='285'
							height='358'
							xlinkHref={PROJECTS}
						/>
						<path
							id='PROJECTS-3'
							data-name='PROJECTS'
							className={styles.cls9}
							d='M12715.9,896.531c-12.1-2.654-22.7-4.588-22.7-4.586-4.3,16.973-8.5,33.947-12.8,50.92,6.9,1.731,13.8,3.377,20.8,4.939,1.2-5.487,2.4-10.974,3.7-16.461,0,0,3.8,1.249,6.9,1.927,13.4,2.89,22.8-3.048,24.7-13.722C12738.5,908.828,12732.4,900.151,12715.9,896.531Zm-8,21.277,1.8-8.048c1,0.229,2.1.457,3.1,0.683,2.7,0.592,4.2,2.835,3.7,5.036s-2.8,3.618-5.5,3.018C12710,918.269,12708.9,918.039,12707.9,917.808Zm85.1,45.665q-5.7-10.86-11.1-21.791c0,0.01,7.6-2.794,8.9-13.6,1.3-10.828-5.4-19.086-22-21.624-11.4-1.744-22.1-2.956-22.1-2.957q-4.8,25.826-9.4,51.65c6.9,1.269,13.9,2.454,20.9,3.554l2.7-17.04c0.3,0.042.5,0.083,0.8,0.124,2.3,6.176,4.6,12.344,7,18.5Q12780.85,962.053,12793,963.473Zm-30-35.14c0.4-2.717.8-5.433,1.3-8.15,0.7,0.121,1.5.242,2.3,0.361a4.381,4.381,0,0,1,4,4.782c-0.3,2.225-2.5,3.792-5.3,3.371C12764.5,928.577,12763.8,928.455,12763,928.333Zm74,12.863a8.681,8.681,0,1,1-8-9.61A8.663,8.663,0,0,1,12837,941.2Zm22.1,1.228c0.6-15.384-11.2-27.786-28.6-29.156-17.5-1.378-31,9.034-32.9,24.316-1.8,15.242,9.8,28.774,28.6,30.263C12845,969.318,12858.6,957.767,12859.1,942.424Zm15.8,3.527c-0.1,4.123-3,6.683-6.6,6.569a11.179,11.179,0,0,1-5.5-1.693q-3.15,7.762-6.3,15.5c0-.011,5.5,4.784,16.1,5.07,12.3,0.328,22.9-9.452,22.9-25.2V916.953c-6.7,0-13.3-.082-19.9-0.243-0.3,9.747-.5,19.494-0.7,29.241h0Zm50.9,4.228q10.35-.36,20.7-0.969l-0.9-14.973c-6.8.4-13.6,0.716-20.3,0.952-0.1-1.25-.1-2.5-0.2-3.748,7.3-.253,14.6-0.6,21.8-1.041l-0.9-14.972c-13.7.835-27.5,1.328-41.3,1.477,0.2,17.5.4,35,.5,52.5q22.95-.247,45.6-1.67l-0.9-14.97q-12,.749-24,1.167C12925.9,952.677,12925.8,951.428,12925.8,950.179Zm28.9-9.01c1,15.331,14.9,26.491,32,24.718,15.5-1.625,21.7-10.852,21.7-10.826-3.8-4.294-7.6-8.613-11.3-12.956,0,0-4.3,4.665-9.9,5.255s-9.9-2.774-10.4-8,3.1-9.322,8.5-9.9,10.6,2.962,10.6,2.961c2.6-5.086,5.1-10.184,7.6-15.292-0.1-.02-8-7.215-22.4-5.7C12965.2,913.077,12953.8,925.813,12954.7,941.169Zm50.9-31.506c0.8,5.7,1.5,11.4,2.3,17.1q7.35-.984,14.7-2.1c1.8,11.617,3.5,23.235,5.3,34.853q10.5-1.587,21-3.428c-2.1-11.572-4.1-23.144-6.1-34.716,4.9-.861,9.7-1.765,14.6-2.713l-3.3-16.933C13038,904.855,13021.8,907.5,13005.6,909.663Zm79.1,24.769a22.167,22.167,0,0,1-14.4-1.9c-1.7,4.185-3.5,8.365-5.3,12.54,0-.031,9,7.527,26.6,3.563,14.1-3.2,20.8-13.5,18.6-21.831-4.1-15.894-24.8-10.9-25.6-14.634-0.3-1.1.6-2.455,2.5-2.9,5.4-1.237,10.9,1.64,10.9,1.64q2.4-6.356,4.5-12.718c0-.015-8.7-6.209-22.2-3.121-13.1,2.974-19.8,12.656-18.1,21.135,3.1,16.27,24.3,11.753,25.2,15.329C13087.6,932.628,13086.7,933.994,13084.7,934.432Z'
							transform='translate(-11714)'
						/>
					</g>
					<g
						id='About'
						onClick={() => route(ROUTES.about)}
						style={{ transform: getSpeed(-0.2) }}
						className={`${styles.about} ${styles.objects}`}
					>
						<image
							id='about-2'
							data-name='about'
							x='1409'
							y='111'
							width='436'
							className={styles.objectImage}
							height='244'
							xlinkHref={ABOUT}
						/>
						<path
							id='ABOUT-3'
							data-name='ABOUT'
							className={styles.cls10}
							d='M13237,270.968c-8.3-1.42-16.5-3.007-24.8-4.761-8.4,15.374-17.3,30.6-26.5,45.67,7.5,1.8,15.1,3.473,22.7,5.013q1.5-3.37,3-6.744c3.3,0.675,6.7,1.323,10.1,1.946l0.3,7.369q11.4,2.079,22.8,3.763C13244.3,323.226,13236.6,271.262,13237,270.968Zm-21.1,28.337q2.7-6.1,5.1-12.208,0.15,6.616.3,13.237Q13218.6,299.832,13215.9,299.305Zm77.6,2.577c0,0.023,10-1.088,10.5-9.737,0.5-7.592-5.8-14.291-22.3-15.864-11.3-1.106-21.7-1.8-21.7-1.8-2.2,16.653-4.4,33.306-6.7,49.959,0,0,11,2.238,23.8,3.471,19.9,1.876,27.4-4.423,27.8-12.273,0.6-10.752-11.5-13.368-11.5-13.4C13293.4,302.121,13293.5,302,13293.5,301.882Zm-15.7-12.966q1.35,0.135,2.7.264c2.6,0.257,4,1.826,3.8,3.619s-1.8,3.091-4.5,2.83c-0.9-.087-1.7-0.175-2.6-0.266Zm0.5,26.1c-1.5-.153-3.1-0.313-3.1-0.313,0.2-2.388.5-4.775,0.7-7.163,1.1,0.1,2.1.209,3.1,0.309,3.1,0.3,4.5,1.87,4.3,4.023S13281.4,315.32,13278.3,315.016Zm74.1-9.858a8.453,8.453,0,1,1-16.9.02A8.451,8.451,0,1,1,13352.4,305.158Zm21.5-.657c-0.8-14.764-13.2-25.585-30-25.561s-29.1,10.866-29.9,25.631c-0.7,14.715,11.5,26.943,30,26.933C13362.5,331.47,13374.7,319.214,13373.9,304.5Zm36,5.624c-3.5.355-6.4-1.91-6.8-5.854l-2.4-26.888q-9.6.879-19.2,1.465c0.6,8.984,1.1,17.968,1.7,26.952,0.8,14.36,12.6,23.85,28.6,22.235,15.9-1.631,25.6-13.3,23.5-27.525-1.3-8.911-2.5-17.822-3.8-26.733-6.3.9-12.7,1.706-19.1,2.412l3,26.838A6.019,6.019,0,0,1,13409.9,310.125Zm31.8-37.889c0.9,5.452,1.8,10.9,2.6,16.356,4.8-.756,9.5-1.565,14.3-2.427l6,33.3c6.9-1.243,13.7-2.59,20.5-4.044-2.4-11.031-4.8-22.062-7.1-33.094q7.05-1.513,14.1-3.187c-1.3-5.371-2.6-10.742-3.8-16.113-15.5,3.663-31,6.734-46.6,9.213h0Z'
							transform='translate(-11714)'
						/>
					</g>
					<g
						id='Experiences'
						onClick={() => route(ROUTES.experiences)}
						style={{ transform: getSpeed(0.4) }}
						className={`${styles.experiences} ${styles.objects}`}
					>
						<image
							id='experiences-2'
							data-name='experiences'
							x='151'
							y='215'
							width='660'
							height='397'
							xlinkHref={EXPERIENCE}
							className={styles.objectImage}
						/>
						<path
							id='EXPERIENCES-3'
							data-name='EXPERIENCES'
							className={styles.cls11}
							d='M11942.2,515.282c6.4,1.2,12.8,2.363,19.1,3.477v-14.8c-6.3-1.114-12.7-2.273-19.1-3.477v-3.7c6.9,1.3,13.7,2.541,20.6,3.733v-14.8c-13.2-2.3-26.5-4.792-39.6-7.479v51.8q20.4,4.179,41.1,7.733v-14.8c-7.4-1.269-14.7-2.6-22.1-3.987v-3.7Zm38.3-.717c-4.9,7.846-9.9,15.665-14.8,23.458,7.4,1.262,14.8,2.463,22.1,3.605,2-4.876,4-9.756,5.9-14.64,2,5.476,4,10.948,5.9,16.416q11.1,1.617,22.2,3.054c-4.9-9.273-9.9-18.572-14.8-27.9q7.05-11.965,14.1-24-11.1-1.443-22.2-3.066c-1.7,4.435-3.4,8.866-5.2,13.294q-2.55-7.419-5.1-14.848c-7.4-1.137-14.8-2.335-22.1-3.592C11971.1,495.776,11975.8,505.182,11980.5,514.565Zm67.2-17.541c-11.9-1.305-22.2-1.9-22.2-1.9v51.8q9.6,1.219,19.2,2.3V532.586s3.7,0.787,6.7,1.105c12.6,1.351,20-5.4,20-16.12C12071.4,506.823,12064,498.806,12047.7,497.024Zm-3,21.871v-8.141q1.5,0.166,3,.331a4.754,4.754,0,0,1,4.4,4.554c0,2.22-1.8,3.873-4.4,3.586Zm52.7,16.762c6.4,0.478,12.8.911,19.3,1.3v-14.8c-6.5-.388-12.9-0.821-19.3-1.3v-3.7c6.9,0.515,13.8.978,20.8,1.389v-14.8c-13.4-.792-26.8-1.778-40.1-2.958v51.8c13.8,1.223,27.7,2.238,41.6,3.045v-14.8c-7.5-.433-14.9-0.924-22.3-1.476v-3.7Zm80.2,22.133q-6.3-10.093-12.6-20.244s6.7-3.542,6.7-14.278-7.4-18.226-23.8-18.824c-11.2-.414-21.6-0.241-21.6-0.242v51.8c6.5,0.343,12.9.642,19.4,0.895V539.88c0.2,0.01.5,0.02,0.7,0.029,3,5.789,6,11.569,8.9,17.339C12162.8,557.489,12170.2,557.669,12177.6,557.79Zm-31.9-31.231v-8.14c0.7,0.029,1.5.058,2.2,0.086a4.438,4.438,0,0,1,4.5,4.231,4.068,4.068,0,0,1-4.5,3.909C12147.2,526.617,12146.4,526.588,12145.7,526.559Zm54.3-20.388c-6.5,0-12.9-.048-19.4-0.139v51.8c6.5,0.091,12.9.137,19.4,0.138v-51.8Zm28.2,33.02c6.5-.13,12.9-0.305,19.4-0.525v-14.8c-6.5.22-12.9,0.395-19.4,0.525v-3.7c7-.14,13.9-0.332,20.9-0.576v-14.8q-20.1.707-40.2,0.832v51.8c13.9-.086,27.8-0.381,41.6-0.885v-14.8c-7.4.27-14.8,0.48-22.3,0.63v-3.7Zm61,15.93c7.2-.461,14.3-0.978,21.5-1.551v-51.8c-6.4.513-12.9,0.982-19.3,1.406v22.941q-6.3-11.055-12.6-22.168-10.8.612-21.6,1.054v51.8c6.5-.265,12.9-0.575,19.4-0.929V532.933q6.3,11.122,12.6,22.188h0Zm30.4-28.192c0,15.164,11.9,26.026,27.4,24.37,14.1-1.511,20.8-10.516,20.8-10.5-3-4.327-5.9-8.663-8.9-13.01,0,0-4.5,4.585-9.6,5.144-5.2.56-8.9-2.77-8.9-7.949a9.713,9.713,0,0,1,8.9-9.812c5.1-.559,9.6,3,9.6,3,3-5.028,5.9-10.065,8.9-15.112,0-.013-6.7-7.289-20.8-5.778C12331.5,498.931,12319.6,511.751,12319.6,526.929Zm76.3-1.31c6.4-.911,12.7-1.867,19.1-2.868v-14.8c-6.4,1-12.7,1.957-19.1,2.868v-3.7c6.8-.981,13.7-2.014,20.6-3.1v-14.8c-13.3,2.093-26.5,3.992-39.9,5.7v51.8q20.7-2.652,41.4-5.93v-14.8c-7.4,1.17-14.8,2.281-22.1,3.332v-3.7h0Zm44.5-2.648a17.085,17.085,0,0,1-12.5-2.671c-2.3,4.088-4.6,8.17-7,12.246,0-.019,6.7,7.871,22.8,5.011,12.9-2.3,21-12.045,21-20.548,0-16.238-19.8-12.539-19.9-16.282,0-1.11,1.2-2.417,3-2.75,5.1-.931,9.5,2.305,9.5,2.305,2.4-4.139,4.7-8.283,7-12.434,0-.011-6.6-6.823-19.8-4.446-12.9,2.294-21,11.716-21,20.234,0,16.324,19.9,12.937,19.9,16.595C12443.4,521.341,12442.3,522.648,12440.4,522.971Z'
							transform='translate(-11714)'
						/>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default Background
