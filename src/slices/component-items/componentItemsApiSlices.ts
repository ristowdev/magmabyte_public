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
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
      }),
  }),
});

export const { 
  useAddNewItemsToComponentMutation,
} = ComponentItemsApiSlices;
