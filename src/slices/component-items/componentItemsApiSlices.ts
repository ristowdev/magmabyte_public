import apiBaseSlice from "../../api";

export const ComponentItemsApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewItemsToComponent: builder.mutation({
    // addNewItemsToComponent: builder.mutation<{}, FormData>({
        query: (payload) => ({
          url: '/component/items/create',
          // url: '/upload',
          method: 'POST',
          body: payload,
          headers: {
            // 'Content-type': 'multipart/form-data; application/json; charset=UTF-8',
            'Content-type': 'multipart/form-data; ',
          },
        }),
      }),
  }),
});

export const { 
  useAddNewItemsToComponentMutation,
} = ComponentItemsApiSlices;
