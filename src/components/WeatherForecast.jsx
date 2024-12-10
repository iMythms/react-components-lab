import React from 'react'

const WeatherForecast = () => {
	const weatherForecasts = [
		{
			day: 'Mon',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
			imgAlt: 'sun icon',
			conditions: 'Sunny',
			time: 'Morning',
			timeIcon: 'https://tabler.io/icons/icon/clock-hour-3',
		},
		{
			day: 'Tue',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
			imgAlt: 'moon icon',
			conditions: 'Clear',
			time: 'Night',
			timeIcon: 'https://tabler.io/icons/icon/clock-hour-3',
		},
		{
			day: 'Wed',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
			imgAlt: 'clouds with lightning icon',
			conditions: 'Stormy',
			time: 'All Day',
			timeIcon: 'https://tabler.io/icons/icon/clock-hour-3',
		},
		{
			day: 'Thu',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
			imgAlt: 'sun overcast by clouds icon',
			conditions: 'Overcast',
			time: 'Evening',
			timeIcon: 'https://tabler.io/icons/icon/clock-hour-3',
		},
		{
			day: 'Fri',
			img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
			imgAlt: 'moon overcast by clouds icon',
			conditions: 'Cloudy',
			time: 'Night',
			timeIcon: 'https://tabler.io/icons/icon/clock-hour-3',
		},
	]
	return (
		<div className="flex flex-col xl:flex-row gap-6 xl:gap-6 items-center justify-center xl:justify-evenly text-white">
			{weatherForecasts.map((forecast, index) => (
				<div
					key={index}
					className="flex flex-col items-center gap-2 bg-slate-800 rounded-2xl p-6 w-96 
                      bg-clip-padding bg-opacity-60 border border-gray-100 border-opacity-15"
				>
					<h2 className="text-lg font-medium">{forecast.day}</h2>
					<img src={forecast.img} alt={forecast.imgAlt} />
					<p className="flex gap-2 items-center justify-center">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-cloud"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
							</svg>
						</div>
						<span className="">{forecast.conditions}</span>
					</p>
					<p className="flex gap-2 items-center justify-center">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-1"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
								<path d="M12 7v5" />
								<path d="M12 12l2 -3" />
							</svg>
						</div>
						{forecast.time}
					</p>
				</div>
			))}
		</div>
	)
}

export default WeatherForecast
