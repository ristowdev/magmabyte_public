import apiBaseSlice from "../../api";

export const ComponentItemsApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewItemsToComponent: builder.mutation({
        query: (payload) => ({
          url: '/component/items/create',
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
