
export interface WeatherBase {
	datetime: string
	datetimeEpoch: number

	temp: number
	feelslike: number
	humidity: number
	dew?: number

	precip?: number
	precipprob?: number
	preciptype?: string[] | null
	snow?: number
	snowdepth?: number

	windgust?: number
	windspeed?: number
	winddir?: number

	pressure?: number
	visibility?: number
	cloudcover?: number

	solarradiation?: number
	solarenergy?: number
	uvindex?: number
	severerisk?: number

	conditions: string
	icon: string

	stations?: string[] | null
	source?: string
}

export interface WeatherHour extends WeatherBase {}

export interface WeatherDay extends Omit<WeatherBase, 'datetime' | 'datetimeEpoch'> {
	datetime: string
	datetimeEpoch: number

	tempmax: number
	tempmin: number

	feelslikemax: number
	feelslikemin: number

	precipcover: number

	sunrise: string
	sunriseEpoch: number

	sunset: string
	sunsetEpoch: number

	moonphase: number

	description: string

	hours: WeatherHour[]
}

export interface CurrentWeather extends WeatherBase {
	sunrise?: string
	sunriseEpoch?: number

	sunset?: string
	sunsetEpoch?: number

	moonphase?: number
}

export interface WeatherStation {
	distance: number
	latitude: number
	longitude: number
	useCount: number
	id: string
	name: string
	quality: number
	contribution: number
}

export interface WeatherResponse {
	queryCost: number

	latitude: number
	longitude: number

	resolvedAddress: string
	address: string

	timezone: string
	tzoffset: number

	days: WeatherDay[]

	stations: Record<string, WeatherStation>

	currentConditions: CurrentWeather
}
