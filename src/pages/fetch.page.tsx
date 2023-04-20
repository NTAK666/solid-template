import { Component, For, Match, Suspense, Switch } from "solid-js";
import { usePosts } from "@/services/post.service";
import { PostItem } from "@/components/post/item";
import { LoadingComponent } from "@/components/loading";
import { Post } from "@/entities/post.entity";

const FetchPage: Component = () => {
	const posts = usePosts();

	return (
		<>
			<button
				onClick={ () => void posts.refetch() }
				disabled={ posts.isFetching }
				class='rounded bg-red-500 px-4 py-2 font-semibold text-white'
			>
				Refetch
			</button>
			<Switch>
				<Match when={ posts.isFetching }>
					<LoadingComponent/>
				</Match>
				<Match when={ posts.isSuccess }>
					<Suspense fallback={ <LoadingComponent/> }>
						<For each={ posts.data }>
							{ ( post: Post ) => <PostItem post={ post }/> }
						</For>
					</Suspense>
				</Match>
			</Switch>
		</>
	)
}

export default FetchPage
