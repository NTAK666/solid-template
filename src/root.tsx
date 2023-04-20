import { Route, Routes } from "@solidjs/router";
import { Suspense } from "solid-js";
import { Body, Head, Html, Meta, Scripts, Title, } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import './styles.css';
import RootLayout from "@/layouts/root";
import HomePage from "@/pages/home.page";
import AboutPage from "@/pages/about.page";
import NotFoundPage from "@/pages/404.page";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import StackPage from "@/pages/stack.page";
import CounterPage from "@/pages/counter.page";
import FetchPage from "@/pages/fetch.page";

const queryClient = new QueryClient()
export default function Root() {


	return (
		<Html lang='en'>
			<Head>
				<Title>SolidStart - With Vitest</Title>
				<Meta charset='utf-8'/>
				<Meta name='viewport' content='width=device-width, initial-scale=1'/>
			</Head>
			<Body>
				<QueryClientProvider client={ queryClient }>
					<Suspense>
						<ErrorBoundary>
							<Routes>
								<Route component={ RootLayout } path='/'>
									<Route
										path=''
										component={ HomePage }/>
									<Route
										path='/about'
										component={ AboutPage }
									/>
									<Route
										path='/stack'
										component={ StackPage }
									/>
									<Route
										path='/counter'
										component={ CounterPage }
									/>
									<Route
										path='/fetch'
										component={ FetchPage }
									/>
									<Route
										path='*'
										component={ NotFoundPage }
									/>
								</Route>
							</Routes>
						</ErrorBoundary>
					</Suspense>
				</QueryClientProvider>
				<Scripts/>
			</Body>
		</Html>
	);
}
