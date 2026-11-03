
import type { WeatherResponse } from '../types/weather'

const BASE_URL =
		'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export async function getWeather(
		location: string,
): Promise<WeatherResponse> {
	const encodedLocation = encodeURIComponent(location.trim())

	const url = `${BASE_URL}/${encodedLocation}/yesterday/tomorrow?unitGroup=metric&include=current,hours&contentType=json&key=${API_KEY}`

	const response = await fetch(url)

	if (!response.ok) {
		const message = await response.text()
		throw new Error(message || 'Failed to fetch weather data.')
	}

	return response.json() as Promise<WeatherResponse>
}
