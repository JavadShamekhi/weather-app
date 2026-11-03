import {
	Cloud,
	CloudRain,
	Sun,
	CloudSun,
	CloudSnow,
	CloudLightning,
	Sunrise,
	Sunset,
	Droplets,
} from 'lucide-react'

import type { WeatherDay } from '../types/weather'

interface DailyForecastProps {
	days: WeatherDay[]
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

function formatDay(date: string) {
	return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
	})
}

export default function DailyForecast({ days }: DailyForecastProps) {
	return (
			<section className="space-y-4">
				<h2 className="text-xl font-semibold">Daily Forecast</h2>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{days.map((day) => {
						const Icon = getWeatherIcon(day.icon)

						return (
								<article
										key={day.datetime}
										className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900"
								>
									<div className="mb-4 flex items-center justify-between">
										<h3 className="font-semibold">{formatDay(day.datetime)}</h3>
										<Icon size={28} className="text-amber-500" />
									</div>

									<p className="mb-4 text-sm text-slate-500">
										{day.conditions}
									</p>

									<div className="flex items-center justify-between">
										<div>
											<p className="text-xs text-slate-500">Min / Max</p>
											<p className="text-lg font-semibold">
												{Math.round(day.tempmin)}° / {Math.round(day.tempmax)}°
											</p>
										</div>

										<div className="flex items-center gap-1 text-sm text-slate-500">
											<Droplets size={16} />
											{Math.round(day.precipprob)}%
										</div>
									</div>

									<div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
										<div className="flex items-center gap-2">
											<Sunrise size={18} className="text-amber-500" />
											<div>
												<p className="text-xs text-slate-500">Sunrise</p>
												<p className="text-sm font-medium">{day.sunrise}</p>
											</div>
										</div>

										<div className="flex items-center gap-2">
											<Sunset size={18} className="text-orange-500" />
											<div>
												<p className="text-xs text-slate-500">Sunset</p>
												<p className="text-sm font-medium">{day.sunset}</p>
											</div>
										</div>
									</div>
								</article>
						)
					})}
				</div>
			</section>
	)
}