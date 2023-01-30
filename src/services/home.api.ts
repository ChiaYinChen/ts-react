import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Story = {
  id: number;
  name: string;
  avatar: string;
};

type Post = {
  id: number;
  location: string;
  account: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getStoies: builder.query<Story[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `stories/${id}`;
        }
        return "stories";
      },
    }),
    getPosts: builder.query<Post[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `posts/${id}`;
        }
        return "posts";
      },
    }),
  }),
});

export const { useGetStoiesQuery, useGetPostsQuery } = homeApi;
