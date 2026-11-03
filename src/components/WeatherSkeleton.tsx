export default function WeatherSkeleton() {
	return (
			<div className="animate-pulse space-y-8" aria-label="Loading weather">
				{/* Current Weather Skeleton */}
				<section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
					<div className="mb-6 h-4 w-40 rounded bg-slate-200 dark:bg-slate-700"/>

					<div className="flex items-center justify-between">
						<div className="space-y-3">
							<div className="h-14 w-28 rounded bg-slate-200 dark:bg-slate-700"/>
							<div className="h-5 w-36 rounded bg-slate-200 dark:bg-slate-700"/>
						</div>

						<div className="h-5 w-28 rounded bg-slate-200 dark:bg-slate-700"/>
					</div>
				</section>

				{/* Weather Details Skeleton */}
				<section className="grid grid-cols-2 gap-4 sm:grid-cols-3">
					{Array.from({length: 6}).map((_, index) => (
							<div
									key={index}
									className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900"
							>
								<div className="mb-4 h-4 w-24 rounded bg-slate-200 dark:bg-slate-700"/>
								<div className="h-7 w-16 rounded bg-slate-200 dark:bg-slate-700"/>
							</div>
					))}
				</section>

				{/* Hourly Forecast Skeleton */}
				<section className="space-y-4">
					<div className="h-6 w-36 rounded bg-slate-200 dark:bg-slate-700"/>

					<div className="flex gap-4 overflow-hidden">
						{Array.from({length: 5}).map((_, index) => (
								<div
										key={index}
										className="min-w-36 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900"
								>
									<div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700"/>
									<div className="mx-auto my-5 h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700"/>
									<div className="mx-auto h-7 w-12 rounded bg-slate-200 dark:bg-slate-700"/>
									<div className="mx-auto mt-3 h-3 w-20 rounded bg-slate-200 dark:bg-slate-700"/>
								</div>
						))}
					</div>
				</section>

				{/* Daily Forecast Skeleton */}
				<section className="space-y-4">
					<div className="h-6 w-36 rounded bg-slate-200 dark:bg-slate-700"/>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{Array.from({length: 3}).map((_, index) => (
								<div
										key={index}
										className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900"
								>
									<div className="mb-4 h-5 w-32 rounded bg-slate-200 dark:bg-slate-700"/>
									<div className="mb-4 h-4 w-24 rounded bg-slate-200 dark:bg-slate-700"/>
									<div className="h-6 w-28 rounded bg-slate-200 dark:bg-slate-700"/>
									<div className="mt-5 h-12 rounded bg-slate-200 dark:bg-slate-700"/>
								</div>
						))}
					</div>
				</section>
			</div>
	)
}