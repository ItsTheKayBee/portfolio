export const EXPERIENCE_START_DATE: Date = new Date(2021, 8, 2)

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
	month: 'long',
	year: 'numeric'
}

export const SVG_CLIP_PATHS: string[] = [
	'M51.2,-54.6C59.5,-42.8,54.8,-21.4,55,0.2C55.2,21.8,60.3,43.6,51.9,59.5C43.6,75.5,21.8,85.7,2.6,83.1C-16.6,80.5,-33.3,65.2,-44.7,49.3C-56,33.3,-62.1,16.6,-58.5,3.7C-54.8,-9.3,-41.3,-18.5,-29.9,-30.3C-18.5,-42.1,-9.3,-56.4,6.1,-62.5C21.4,-68.5,42.8,-66.4,51.2,-54.6Z',
	'M48.4,-40.4C63.2,-33.6,76.1,-16.8,74.5,-1.6C72.8,13.5,56.7,27.1,41.9,43.3C27.1,59.6,13.5,78.6,-3.4,81.9C-20.3,85.3,-40.6,73.1,-53.5,56.8C-66.4,40.6,-71.8,20.3,-72.8,-1C-73.8,-22.3,-70.3,-44.5,-57.4,-51.3C-44.5,-58.1,-22.3,-49.5,-2.7,-46.8C16.8,-44,33.6,-47.2,48.4,-40.4Z',
	'M41.7,-37C56.6,-26.8,73,-13.4,77.4,4.3C81.7,22,73.9,44,59,55.3C44,66.5,22,67,1.7,65.3C-18.6,63.6,-37.1,59.6,-46.7,48.4C-56.2,37.1,-56.7,18.6,-57.5,-0.8C-58.2,-20.1,-59.2,-40.1,-49.7,-50.4C-40.1,-60.7,-20.1,-61.1,-3.3,-57.8C13.4,-54.4,26.8,-47.3,41.7,-37Z',
	'M47.2,-55.8C53.6,-40.7,46.2,-20.4,47,0.8C47.8,22,56.9,43.9,50.4,59.5C43.9,75,22,84,5,79C-11.9,74,-23.9,54.9,-38.8,39.4C-53.7,23.9,-71.7,11.9,-76.1,-4.4C-80.4,-20.7,-71.3,-41.4,-56.3,-56.5C-41.4,-71.6,-20.7,-81.2,-0.2,-81C20.4,-80.8,40.7,-71,47.2,-55.8Z',
	'M52.3,-50.4C60.6,-43.9,55.3,-22,52.4,-2.9C49.5,16.2,49,32.3,40.6,45.6C32.3,58.9,16.2,69.3,-1.9,71.2C-19.9,73,-39.8,66.4,-53.8,53.1C-67.9,39.8,-76,19.9,-75.9,0.2C-75.7,-19.6,-67.2,-39.1,-53.2,-45.6C-39.1,-52.1,-19.6,-45.6,1.2,-46.8C22,-48,43.9,-57,52.3,-50.4Z',
	'M52.8,-49.8C65.4,-40.3,70.3,-20.1,67.6,-2.7C65,14.8,54.7,29.6,42.1,42.1C29.6,54.6,14.8,64.9,2.6,62.3C-9.7,59.8,-19.4,44.4,-35.3,31.9C-51.2,19.4,-73.3,9.7,-79.3,-6C-85.4,-21.8,-75.3,-43.5,-59.4,-53C-43.5,-62.5,-21.8,-59.7,-0.8,-58.9C20.1,-58,40.3,-59.2,52.8,-49.8Z',
	'M43.9,-42.9C55,-32.7,61.1,-16.3,59.3,-1.8C57.5,12.7,47.9,25.5,36.7,35C25.5,44.5,12.7,50.7,-3.2,53.9C-19.1,57,-38.2,57.2,-54.7,47.7C-71.2,38.2,-85,19.1,-81.2,3.8C-77.4,-11.5,-56,-23.1,-39.5,-33.3C-23.1,-43.6,-11.5,-52.6,2.4,-55C16.3,-57.4,32.7,-53.2,43.9,-42.9Z',
	'M44.2,-41C56.1,-32.3,63.9,-16.1,63.9,0C63.8,16.1,56,32.1,44.1,44.3C32.1,56.4,16.1,64.6,-0.2,64.9C-16.5,65.1,-33.1,57.4,-41.5,45.2C-49.9,33.1,-50.1,16.5,-48.5,1.6C-47,-13.4,-43.6,-26.8,-35.2,-35.6C-26.8,-44.4,-13.4,-48.4,1.4,-49.8C16.1,-51.2,32.3,-49.8,44.2,-41Z',
	'M37.5,-30.3C53,-22,72.9,-11,73,0.1C73.1,11.2,53.3,22.3,37.8,30.3C22.3,38.3,11.2,43.1,-2.3,45.4C-15.8,47.8,-31.6,47.6,-46,39.6C-60.3,31.6,-73.3,15.8,-74.1,-0.8C-74.9,-17.5,-63.7,-34.9,-49.3,-43.3C-34.9,-51.6,-17.5,-50.7,-3.2,-47.5C11,-44.3,22,-38.6,37.5,-30.3Z',
	'M33,-35.6C42,-24,48,-12,53.3,5.3C58.6,22.6,63.3,45.3,54.3,56.9C45.3,68.5,22.6,69,3.7,65.3C-15.3,61.7,-30.5,53.7,-42.5,42.1C-54.5,30.5,-63.3,15.3,-62,1.3C-60.7,-12.7,-49.5,-25.5,-37.5,-37C-25.5,-48.6,-12.7,-58.9,-0.4,-58.5C12,-58.2,24,-47.1,33,-35.6Z',
	'M39.1,-47.5C47.2,-31.1,47.9,-15.5,47.8,0C47.8,15.4,47,30.9,38.9,40.6C30.9,50.4,15.4,54.4,2.7,51.7C-10,49,-20,39.5,-29.9,29.8C-39.8,20,-49.6,10,-54.5,-4.9C-59.4,-19.8,-59.4,-39.7,-49.5,-56.1C-39.7,-72.5,-19.8,-85.6,-2.2,-83.5C15.5,-81.3,31.1,-63.9,39.1,-47.5Z',
	'M32.9,-38.8C40.1,-25.6,41.8,-12.8,44.8,3C47.8,18.8,52.1,37.6,44.9,46.5C37.6,55.3,18.8,54.2,-2.2,56.4C-23.2,58.6,-46.5,64.2,-61.6,55.3C-76.7,46.5,-83.6,23.2,-81.8,1.9C-79.9,-19.5,-69.3,-39.1,-54.2,-52.3C-39.1,-65.5,-19.5,-72.3,-3.4,-68.9C12.8,-65.6,25.6,-52,32.9,-38.8Z',
	'M33.4,-38.1C43.1,-23.7,50.6,-11.9,53.2,2.6C55.9,17.2,53.7,34.3,44,46.1C34.3,57.9,17.2,64.3,3.9,60.4C-9.4,56.5,-18.8,42.4,-32.1,30.6C-45.4,18.8,-62.6,9.4,-62.6,-0.1C-62.7,-9.5,-45.6,-19,-32.3,-33.4C-19,-47.7,-9.5,-66.9,1.2,-68.1C11.9,-69.3,23.7,-52.4,33.4,-38.1Z',
	'M53.8,-53.6C68.1,-39.5,77,-19.7,75,-1.9C73.1,15.9,60.3,31.7,46,43C31.7,54.2,15.9,60.8,-1.1,61.9C-18,62.9,-36,58.5,-43.9,47.3C-51.8,36,-49.6,18,-50.2,-0.6C-50.8,-19.3,-54.3,-38.5,-46.4,-52.7C-38.5,-66.8,-19.3,-75.8,0.2,-76C19.7,-76.3,39.5,-67.7,53.8,-53.6Z',
	'M45.8,-43.5C59.7,-32,71.5,-16,75.2,3.8C79,23.6,74.8,47.1,61,61.5C47.1,75.8,23.6,81,0.1,81C-23.4,80.9,-46.9,75.6,-60.3,61.3C-73.7,46.9,-77,23.4,-73.3,3.8C-69.5,-15.9,-58.5,-31.7,-45.1,-43.3C-31.7,-54.8,-15.9,-62,0.1,-62C16,-62.1,32,-55,45.8,-43.5Z',
	'M39,-45.5C46,-31.9,44.2,-15.9,45,0.7C45.7,17.4,48.9,34.8,41.8,48.1C34.8,61.4,17.4,70.6,-1,71.6C-19.4,72.6,-38.8,65.4,-52.6,52.1C-66.3,38.8,-74.3,19.4,-73.1,1.2C-71.9,-17,-61.5,-34.1,-47.8,-47.7C-34.1,-61.3,-17,-71.4,-0.6,-70.8C15.9,-70.3,31.9,-59.1,39,-45.5Z',
	'M51.9,-48.6C65.5,-38.3,73.6,-19.1,70.3,-3.3C66.9,12.5,52.2,24.9,38.6,37.8C24.9,50.7,12.5,63.9,-1.1,65C-14.7,66.1,-29.4,55.1,-38.9,42.3C-48.3,29.4,-52.6,14.7,-50,2.6C-47.4,-9.5,-37.9,-19,-28.4,-29.3C-19,-39.6,-9.5,-50.6,4.8,-55.5C19.1,-60.3,38.3,-58.8,51.9,-48.6Z',
	'M41.2,-48.9C50.1,-32.3,51.8,-16.2,50.7,-1.1C49.7,14.1,45.9,28.1,37,37.8C28.1,47.6,14.1,52.9,-4.6,57.5C-23.2,62,-46.3,65.8,-57.5,56C-68.6,46.3,-67.7,23.2,-62.2,5.5C-56.6,-12.2,-46.6,-24.3,-35.4,-40.9C-24.3,-57.4,-12.2,-78.3,2,-80.3C16.2,-82.3,32.3,-65.4,41.2,-48.9Z',
	'M54.5,-57.2C66.8,-42.3,70.2,-21.1,65,-5.2C59.7,10.7,45.9,21.4,33.6,35.9C21.4,50.4,10.7,68.8,-4.4,73.2C-19.5,77.6,-39,68.1,-55.5,53.5C-71.9,39,-85.4,19.5,-84.3,1.1C-83.2,-17.3,-67.5,-34.5,-51,-49.5C-34.5,-64.5,-17.3,-77.2,1.9,-79.1C21.1,-81,42.3,-72.2,54.5,-57.2Z',
	'M55.4,-55.3C70.8,-40.1,81.5,-20,76.1,-5.4C70.7,9.3,49.3,18.6,34,29.7C18.6,40.7,9.3,53.6,-5.7,59.2C-20.6,64.9,-41.2,63.4,-55.1,52.3C-68.9,41.2,-75.9,20.6,-75.3,0.6C-74.7,-19.5,-66.6,-39,-52.8,-54.2C-39,-69.4,-19.5,-80.3,0.3,-80.6C20,-80.9,40.1,-70.5,55.4,-55.3Z',
	'M40.7,-49.3C47.7,-33.6,45.1,-16.8,44.6,-0.5C44,15.7,45.6,31.4,38.5,37.7C31.4,44,15.7,40.9,-2.2,43.1C-20.2,45.3,-40.3,52.9,-56.6,46.6C-73,40.3,-85.4,20.2,-86.5,-1.1C-87.6,-22.3,-77.3,-44.6,-60.9,-60.4C-44.6,-76.1,-22.3,-85.2,-2.8,-82.4C16.8,-79.7,33.6,-65,40.7,-49.3Z'
]

export const TOTAL_NUMBER_OF_SECTIONS = 7

export const MIN_RADIUS = 65
export const MAX_RADIUS = 85

export const ROUTES = {
	publications: '/publications',
	about: '/about',
	experiences: '/experiences',
	achievements: '/achievements',
	contact: '/contact',
	skills: '/skills',
	projects: '/projects'
}
