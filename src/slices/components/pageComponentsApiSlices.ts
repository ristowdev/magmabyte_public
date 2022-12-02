import apiBaseSlice from "../../api";

export const PageComponentsApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({

    // getPages: builder.query({
    //   query: () => ({
    //     url: "/pages/",
    //     method: "GET",
    //   }),
    // }),

    // allPages: builder.query<any,void>({
    //   query: (body) => ({
    //     url: "/pages/",
    //     method: "GET",

    //     body,
    //   }),
    // }),

    getSingleComponent: builder.query({
      query: ([page_id, component_id]) => ({
        url: "/component/"+component_id+"/page/"+page_id,
        method: "GET",
      }),
    }),

    // addNewPage: builder.mutation({
    //     query: (payload) => ({
    //       url: '/page/create',
    //       method: 'POST',
    //       body: payload,
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     }),
    //   }),
  }),
});

export const { 
    useGetSingleComponentQuery
} = PageComponentsApiSlices;
