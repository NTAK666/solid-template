import { Component } from "solid-js";
import { useCounterStore } from "@/stores/counter.store";


const CounterPage: Component = () => {
	const counterStore = useCounterStore()

	return (
		<>
			<div class='flex flex-col items-center space-y-2'>
				<h1>{ counterStore.count }</h1>
				<div class='btn-group flex gap-5'>
					<button
						onClick={ counterStore.increment }
						class='rounded bg-slate-900 px-6 py-2 text-white transition duration-200 hover:bg-slate-600'
					>
						Increment
					</button>
					<button
						onClick={ counterStore.decrement }
						class='rounded bg-slate-900 px-6 py-2 text-white transition duration-200 hover:bg-slate-600'
					>
						Decrement
					</button>
				</div>
			</div>
		</>
	)
}

export default CounterPage
