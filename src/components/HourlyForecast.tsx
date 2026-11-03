import {
	Cloud,
	CloudRain,
	Sun,
	CloudSun,
	CloudSnow,
	CloudLightning,
	Droplets,
	Umbrella,
} from 'lucide-react'

import type {WeatherHour} from '../types/weather'

interface HourlyForecastProps {
	hours: WeatherHour[]
	timezone: string
}

const weatherIcons = {
	'clear-day': Sun,
	'clear-night': Sun,
	'partly-cloudy-day': CloudSun,
	'partly-cloudy-night': Cloud,
	cloudy: Cloud,
	rain: CloudRain,
	snow: CloudSnow,
	'thunder-rain': CloudLightning,
	'thunder-showers-day': CloudLightning,
	'thunder-showers-night': CloudLightning,
}

function getWeatherIcon(icon: string) {
	return weatherIcons[icon as keyof typeof weatherIcons] ?? Cloud
}

function formatHour(datetimeEpoch: number, timezone: string) {
	return new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZone: timezone,
	}).format(new Date(datetimeEpoch * 1000))
}

export default function HourlyForecast({
	                                       hours,
	                                       timezone,
                                       }: HourlyForecastProps) {
	return (
			<section className="space-y-4">
				<h2 className="text-xl font-semibold">Hourly Forecast</h2>

				<div className="flex gap-4 overflow-x-auto pb-3">
					{hours.map((hour) => {
						const Icon = getWeatherIcon(hour.icon)

						return (
								<article
										key={hour.datetimeEpoch}
										className="min-w-36 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900"
								>
									<p className="text-sm text-slate-500">
										{formatHour(hour.datetimeEpoch, timezone)}
									</p>

									<div className="my-4 flex justify-center">
										<Icon size={32} className="text-amber-500"/>
									</div>

									<p className="text-center text-2xl font-semibold">
										{Math.round(hour.temp)}°
									</p>

									<p className="mt-2 truncate text-center text-xs text-slate-500">
										{hour.conditions}
									</p>

									<div className="mt-4 space-y-2 border-t border-slate-100 pt-3 dark:border-slate-800">
										<div className="flex items-center justify-between text-xs text-slate-500">
											<Droplets size={14}/>
											<span>{Math.round(hour.humidity)}%</span>
										</div>

										<div className="flex items-center justify-between text-xs text-slate-500">
											<Umbrella size={14}/>
											<span>{Math.round(hour.precipprob ?? 0)}%</span>
										</div>
									</div>
								</article>
						)
					})}
				</div>
			</section>
	)
}