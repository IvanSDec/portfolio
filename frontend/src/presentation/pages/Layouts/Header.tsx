import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../../../infraestructure/redux/slices/headerSlice'
import { RootState } from '../../../infraestructure/redux/store'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Header() {
	const dispatch = useDispatch()
	const open = useSelector((state: RootState) => state.header.open)
	const { lang } = useParams<{ lang?: string }>()
	const { i18n } = useTranslation()

	useEffect(() => {
		if (lang && ['en', 'es'].includes(lang)) {
			i18n.changeLanguage(lang)
		}
	}, [lang, i18n])

	const handleClick = () => {
		dispatch(setOpen(!open))
	}

	return (

		<div className='w-full h-[50px] flex justify-between items-center px-[50px] fixed'>

			<div className={`w-1/2 h-full bg-red-400 transition-transform duration-500 ${open ? 'transform -translate-x-[700px]' : ''}`}>
				<div className="">
					<h1 className="text-white">{i18n.t('button')}</h1>
				</div>
			</div>

			<div className={`w-1/2 h-full bg-red-400 transition-transform duration-500 ${open ? 'transform translate-x-[700px]' : ''}`}>
				<div className="">{i18n.t('language')}</div>
			</div>

			<div
				className='w-[30px] h-[30px] absolute hamburger flex justify-center items-center flex-col gap-1 bg-black p-[7px] rounded-md inset-2 cursor-pointer transition-transform duration-300'
				onClick={handleClick}
			>
				<div className={`w-full h-[2px] bg-white transition-transform duration-300 ${ !open ? 'transform -rotate-45 translate-y-[6px]' : '' }`}></div>
				<div className={`w-full h-[2px] bg-white transition-opacity duration-300 ${ !open ? 'opacity-0' : '' }`}></div>
				<div className={`w-full h-[2px] bg-white transition-transform duration-300 ${ !open ? 'transform rotate-45  -translate-y-[6px]' : '' }`}></div>
			</div>

		</div>

	)

}

export default Header