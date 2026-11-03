import {
	Droplets,
	Wind,
	Cloud,
	Eye,
	Gauge,
	Sun,
} from 'lucide-react'
import type { CurrentWeather } from '../types/weather'

interface WeatherDetailsProps {
	weather: CurrentWeather
}

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
	const details = [
		{
			label: 'Humidity',
			value: `${Math.round(weather.humidity)}%`,
			icon: Droplets,
		},
		{
			label: 'Wind Speed',
			value: `${weather.windspeed ?? '--'} km/h`,
			icon: Wind,
		},
		{
			label: 'Cloud Cover',
			value: `${weather.cloudcover ?? '--'}%`,
			icon: Cloud,
		},
		{
			label: 'Visibility',
			value: `${weather.visibility ?? '--'} km`,
			icon: Eye,
		},
		{
			label: 'Pressure',
			value: `${weather.pressure ?? '--'} hPa`,
			icon: Gauge,
		},
		{
			label: 'UV Index',
			value: weather.uvindex ?? '--',
			icon: Sun,
		},
	]

	return (
			<section className="grid grid-cols-2 gap-4 sm:grid-cols-3">
				{details.map(({ label, value, icon: Icon }) => (
						<div
								key={label}
								className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900"
						>
							<div className="mb-4 flex items-center gap-2 text-slate-500">
								<Icon size={18} />
								<span className="text-sm">{label}</span>
							</div>

							<p className="text-xl font-semibold">{value}</p>
						</div>
				))}
			</section>
	)
}