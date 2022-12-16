import apiBaseSlice from "../../api";

export const AuthApiSlices = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
      signinUser: builder.mutation({
        query: (body: { email: string; password: string }) => {
          return {
            url: "/admin/login",
            method: "post",
            body,
          };
        },
      }),
  }),
});

export const { 
  useSigninUserMutation
} = AuthApiSlices;
