import { MapPin, Thermometer } from 'lucide-react'
import type { CurrentWeather as CurrentWeatherData } from '../types/weather'

interface CurrentWeatherProps {
	location: string
	weather: CurrentWeatherData
}

export default function CurrentWeather({
	                                       location,
	                                       weather,
                                       }: CurrentWeatherProps) {
	return (
			<section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
				<div className="mb-6 flex items-center gap-2 text-slate-500">
					<MapPin size={18} />
					<span>{location}</span>
				</div>

				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-6xl font-bold tracking-tight">
							{Math.round(weather.temp)}°
						</p>
						<p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
							{weather.conditions}
						</p>
					</div>

					<div className="flex items-center gap-2 text-slate-500">
						<Thermometer size={20} />
						<span>
            Feels like {Math.round(weather.feelslike)}°
          </span>
					</div>
				</div>
			</section>
	)
}