import axios from "axios";
import { API } from "@/config/api";
import { createQuery } from "@tanstack/solid-query";
import { QUERY_KEY } from "@/config/query";
import { Post } from "@/entities/post.entity";

const getPosts = async () =>
	axios.get(API.post.get).then(res => res.data as Post[])


export const usePosts = () => createQuery(() => QUERY_KEY.POSTS.ALL, getPosts);
