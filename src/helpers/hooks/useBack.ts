import { useRouter } from 'next/router'
import { ROUTES } from 'helpers/constants'

const useBack = () => {
	const router = useRouter()
	const routeBack = () => router.push(ROUTES.home)

	return routeBack
}

export default useBack
