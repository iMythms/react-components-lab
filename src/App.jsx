import React from 'react'
import WeatherForecast from './components/WeatherForecast'
import './App.css'

const App = () => {
	return (
		<div className="container mx-auto flex flex-col gap-16 my-12">
			<h1 className="text-4xl font-semibold text-center text-white">
				Local Weather
			</h1>
			<section>
				<WeatherForecast />
			</section>
		</div>
	)
}

export default App
