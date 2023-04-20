import { Post } from "@/entities/post.entity";
import { Component } from "solid-js";

type PostItemProps = {
	post: Post;
};

export const PostItem: Component<PostItemProps> = ( { post } ) => {
	return (
		<div class='flex max-w-[450px] flex-col items-center space-y-10 md:max-w-[1000px]'>
			<h1 class='text-center text-2xl font-semibold'>{ post.title }</h1>
			<p class='text-center'>{ post.body }</p>
		</div>
	)
}
