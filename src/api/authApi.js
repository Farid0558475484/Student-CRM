import { baseQuery } from "./api";

export const autApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (user) => ({
        url: "/api/Security/post/auth/user",
        user,
        method: "POST",
        body: user,
        providesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation } = autApi;
