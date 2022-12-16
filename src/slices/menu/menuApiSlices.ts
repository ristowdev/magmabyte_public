import apiBaseSlice from "../../api";

export const MenuApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllPages: builder.query<any,void>({
      query: (body) => ({
        url: "/pages/",
        method: "GET",

        body,
      }),
    }),


    getMenu: builder.query<any,void>({
      query: (body) => ({
        url: "/menu/",
        method: "GET",

        body,
      }),
    }),

    // singleArticle: builder.query({
    //   query: (id) => ({
    //     url: "/blog/article/byid/"+id,
    //     method: "GET",
    //   }),
    // }),

    // addNewArticle: builder.mutation({
    //     query: (payload) => ({
    //       url: '/blog/article/create',
    //       method: 'POST',
    //       body: payload,
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     }),
    //   }),

    editMenuLinks: builder.mutation({
        query: (payload) => ({
          url: '/menu/links/edit',
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
    useGetAllPagesQuery,
    useEditMenuLinksMutation,
    useGetMenuQuery
    // useAddNewArticleMutation,
    // useAllArticlesQuery,
    // useSingleArticleQuery,
    // useUpdateArticleMutation
} = MenuApiSlices;
