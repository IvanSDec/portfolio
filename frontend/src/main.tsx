import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import i18n from './i18n'
import store from './infraestructure/redux/store'
import HomePage from './presentation/pages/Home'
import AboutPage from './presentation/pages/About'

const getBrowserLanguage = () => {
	const pathname = window.location.pathname
	const lang = pathname.split('/')[1]
	return ['en', 'es'].includes(lang) ? lang : 'en'
}

// eslint-disable-next-line react-refresh/only-export-components
const AppWrapper: React.FC = () => {
	useEffect(() => {
		const language = getBrowserLanguage()
		i18n.changeLanguage(language)
	}, [])

	return (

		<Provider store={store}>
			<React.StrictMode>
				<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/:lang" element={<HomePage />} />
					<Route path="/:lang/about" element={<AboutPage />} />
				</Routes>
				</Router>
			</React.StrictMode>
		</Provider>

	)

}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<AppWrapper />
)