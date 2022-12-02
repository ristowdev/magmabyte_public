import apiBaseSlice from "../../api";

export const PageApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({

    // getPages: builder.query({
    //   query: () => ({
    //     url: "/pages/",
    //     method: "GET",
    //   }),
    // }),

    allPages: builder.query<any,void>({
      query: (body) => ({
        url: "/pages/",
        method: "GET",

        body,
      }),
    }),

    singlePage: builder.query({
      query: (id) => ({
        url: "/page/"+id,
        method: "GET",
      }),
    }),

    addNewPage: builder.mutation({
        query: (payload) => ({
          url: '/page/create',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
      }),

      updatePage: builder.mutation({
        query: (payload) => ({
          url: '/page/update',
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
  useAddNewPageMutation,
  useAllPagesQuery,
  useSinglePageQuery,
  useUpdatePageMutation
} = PageApiSlices;
