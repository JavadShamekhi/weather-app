import {useCallback, useEffect, useState} from 'react'
import {RefreshCw} from 'lucide-react'
import ThemeToggle from './components/ThemeToggle'
import WeatherSkeleton from './components/WeatherSkeleton'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import WeatherDetails from './components/WeatherDetails'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'
import {getWeather} from './services/weatherService'
import type {WeatherResponse} from './types/weather'

function App() {
	const [location, setLocation] = useState(
			() => localStorage.getItem('weather-location') || 'Tehran',
	)
	const [theme, setTheme] = useState<'light' | 'dark'>(() => {
		return localStorage.getItem('weather-theme') === 'dark'
				? 'dark'
				: 'light'
	})
	const [weather, setWeather] = useState<WeatherResponse | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark')
		localStorage.setItem('weather-theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	const fetchWeather = useCallback(async (searchLocation: string) => {
		if (!searchLocation.trim()) return

		try {
			setLoading(true)
			setError(null)

			const data = await getWeather(searchLocation)

			setWeather(data)
			setLocation(searchLocation)

			localStorage.setItem('weather-location', searchLocation)
		} catch (err) {
			setError(
					err instanceof Error
							? err.message
							: 'Something went wrong. Please try again.',
			)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		void fetchWeather(location)
	}, [])

	const handleSearch = () => {
		void fetchWeather(location)
	}

	const handleRefresh = () => {
		if (weather) {
			void fetchWeather(location)
		}
	}

	const hourlyForecast = weather
			? weather.days
					.flatMap((day) => day.hours)
					.filter((hour) => {
						const currentTime = weather.currentConditions.datetimeEpoch
						const hourTime = hour.datetimeEpoch

						return (
								hourTime >= currentTime &&
								hourTime <= currentTime + 24 * 60 * 60
						)
					})
			: []

	return (
			<main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-white">
				<div className="mx-auto max-w-5xl space-y-8">
					<header className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold">Weather App</h1>
							<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
								Check weather conditions around the world
							</p>
							{loading && weather && (
									<p className="mt-2 text-sm text-blue-500">
										Updating weather...
									</p>
							)}
						</div>

						<ThemeToggle theme={theme} onToggle={toggleTheme} />

						<button
								type="button"
								onClick={handleRefresh}
								disabled={loading || !weather}
								aria-label="Refresh weather"
								className="rounded-xl bg-white p-3 shadow-sm transition hover:bg-slate-50 enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-900 dark:hover:bg-slate-800"
						>
							<RefreshCw
									size={20}
									className={loading ? 'animate-spin' : ''}
							/>
						</button>
					</header>

					<SearchBar
							location={location}
							onLocationChange={setLocation}
							onSearch={handleSearch}
							loading={loading}
					/>

					{error && (
							<div
									role="alert"
									className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
							>
								{error}
							</div>
					)}

					{loading && !weather && <WeatherSkeleton/>}

					{weather && (
							<>
								<CurrentWeather
										location={weather.resolvedAddress}
										weather={weather.currentConditions}
								/>

								<WeatherDetails weather={weather.currentConditions}/>

								<HourlyForecast
										hours={hourlyForecast}
										timezone={weather.timezone}
								/>

								<DailyForecast days={weather.days}/>
							</>
					)}

					{!loading && !weather && !error && (
							<p className="py-12 text-center text-slate-500">
								Search for a city to see its weather.
							</p>
					)}
				</div>
			</main>
	)
}

export default App;