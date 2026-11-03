import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
	theme: 'light' | 'dark'
	onToggle: () => void
}

export default function ThemeToggle({
	                                    theme,
	                                    onToggle,
                                    }: ThemeToggleProps) {
	const isDark = theme === 'dark'

	return (
			<button
					type="button"
					onClick={onToggle}
					aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
					className="rounded-xl bg-white p-3 shadow-sm transition cursor-pointer hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800"
			>
				{isDark ? <Sun size={20} /> : <Moon size={20} />}
			</button>
	)
}