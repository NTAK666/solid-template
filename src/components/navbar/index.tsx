import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";

export const NavbarComponent = () => {

	const [refs, setRefs] = createSignal<{
		home: HTMLAnchorElement | undefined;
		about: HTMLAnchorElement | undefined;
		stack: HTMLAnchorElement | undefined;
		counter: HTMLAnchorElement | undefined;
		fetch: HTMLAnchorElement | undefined;
	}>({
		home: undefined,
		about: undefined,
		stack: undefined,
		counter: undefined,
		fetch: undefined,
	})
	const location = useLocation();

	createEffect(() => {
		if (Object.values(refs()).every(ref => ref)) {
			Object.entries(refs()).forEach(( [key, value] ) => {
				const href = value?.getAttribute('href');
				if (href === location.pathname) {
					value?.classList.add('active');
				} else {
					value?.classList.remove('active');
				}
			})
		}
	}, [location.pathname]);

	return (
		<ul class='flex gap-5'>
			<li class='text-2xl font-semibold'>
				<A
					ref={
						( ref ) => {
							setRefs(refs => ({
								...refs,
								home: ref,
							}))
						}
					} activeClass='' class='transition duration-300 navbar-item' href='/'>Home</A>
			</li>
			<li class='text-2xl font-semibold'>
				<A
					ref={
						( ref ) => {
							setRefs(refs => ({
								...refs,
								about: ref,
							}))
						}
					} activeClass='' class='transition duration-300 navbar-item'
					href='/about'>About</A>
			</li>
			<li class='text-2xl font-semibold'>
				<A
					ref={
						( ref ) => {
							setRefs(refs => ({
								...refs,
								stack: ref,
							}))
						}
					} activeClass='' class='transition duration-300 navbar-item'
					href='/stack'>Stack</A>
			</li>
			<li class='text-2xl font-semibold'>
				<A
					ref={
						( ref ) => {
							setRefs(refs => ({
								...refs,
								counter: ref,
							}))
						}
					} activeClass='' class='transition duration-300 navbar-item'
					href='/counter'>Counter</A>
			</li>
			<li class='text-2xl font-semibold'>
				<A
					ref={
						( ref ) => {
							setRefs(refs => ({
								...refs,
								fetch: ref,
							}))
						}
					} activeClass='' class='transition duration-300 navbar-item'
					href='/fetch'>Fetch</A>
			</li>
		</ul>
	);
}
