import apiBaseSlice from "../../api";

export const SettingsApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({

    getSiteSettings: builder.query<any,void>({
      query: (body) => ({
        url: "/settings/",
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

    editSiteSettings: builder.mutation({
        query: (payload) => ({
          url: '/settings/edit',
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
  useEditSiteSettingsMutation,
  useGetSiteSettingsQuery
  // useAddNewArticleMutation,
    // useAllArticlesQuery,
    // useSingleArticleQuery,
    // useUpdateArticleMutation
} = SettingsApiSlices;
