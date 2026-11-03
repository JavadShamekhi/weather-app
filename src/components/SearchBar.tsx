
import { Search } from 'lucide-react'

interface SearchBarProps {
	location: string
	onLocationChange: (value: string) => void
	onSearch: () => void
	loading: boolean
}

function SearchBar({
	                   location,
	                   onLocationChange,
	                   onSearch,
	                   loading,
                   }: SearchBarProps) {
	return (
			<form
					onSubmit={(event) => {
						event.preventDefault()
						onSearch()
					}}
					className="flex gap-2"
			>
				<input
						value={location}
						onChange={(event) => onLocationChange(event.target.value)}
						placeholder="Enter city name..."
						className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400"
				/>

				<button
						type="submit"
						disabled={loading || !location.trim()}
						className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-medium text-white transition hover:bg-blue-600 enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
				>
					<Search size={18} />
					Search
				</button>
			</form>
	)
}

export default SearchBar
