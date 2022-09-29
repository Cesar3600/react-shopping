import React from 'react'
import '../styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../containers/Login'
import RecoveryPassword from '../containers/RecoveryPassword'
import Layout from '../containers/Layout'

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/recovery-password"
						element={<RecoveryPassword />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
