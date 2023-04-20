import { createStore } from "solid-js/store";

interface ICounterStore {
	count: number;
	increment: () => void;
	decrement: () => void;
}

const [counterStore, setCounterStore] = createStore<ICounterStore>({
	count: 0,
	increment: () => setCounterStore("count", ( count ) => count + 1),
	decrement: () => setCounterStore("count", ( count ) => count - 1),
})


export const useCounterStore = () => counterStore;
