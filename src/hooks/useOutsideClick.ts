import {RefObject, useEffect} from 'react'

const useOutsideClick = (callback: () => void, ref:  RefObject<HTMLElement>): void => {
	function clickHandler(event: MouseEvent) {
		//@ts-ignore
		if(ref.current && !ref.current.contains(event.target)) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener('click', clickHandler)

		return () => {
			document.removeEventListener('click', clickHandler)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}

export default useOutsideClick