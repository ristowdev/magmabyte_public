import apiBaseSlice from "../../api";

export const BlogApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({

    allArticles: builder.query<any,void>({
      query: (body) => ({
        url: "/blog/articles/",
        method: "GET",

        body,
      }),
    }),

    singleArticle: builder.query({
      query: (id) => ({
        url: "/blog/article/byid/"+id,
        method: "GET",
      }),
    }),

    addNewArticle: builder.mutation({
        query: (payload) => ({
          url: '/blog/article/create',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
      }),

      updateArticle: builder.mutation({
        query: (payload) => ({
          url: '/blog/article/update',
          method: 'PUT',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
      }),
  }),
});

export const { 
    useAddNewArticleMutation,
    useAllArticlesQuery,
    useSingleArticleQuery,
    useUpdateArticleMutation
} = BlogApiSlices;
