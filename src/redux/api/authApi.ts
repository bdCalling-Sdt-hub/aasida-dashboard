import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const AUTH_URL = "/users";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/create-user`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.auth],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/update-user/${data?.id}`,
        method: "PATCH",
        body: data?.body,
      }),

      invalidatesTags: [tagTypes.auth, tagTypes.application],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}`,
        method: "PATCH",
        body: data,
      }),

      invalidatesTags: [tagTypes.auth, tagTypes.application, tagTypes.users],
    }),
    profile: builder.query({
      query: () => ({
        url: `${AUTH_URL}/profile`,
        method: "GET",
      }),

      providesTags: [tagTypes.auth],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),

    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/otp/verify-otp",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.otp],
    }),

    forgotPass: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "PATCH",
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: data,
      }),
    }),
    resetPass: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: data,
      }),
    }),
    deleteAccount: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "DELETE",
        body: data,
      }),
    }),
  }),

  // overrideExisting: true,
});

export const {
  useSignUpMutation,
  useVerifyOtpMutation,
  useLoginMutation,
  useDeleteAccountMutation,
  useForgotPassMutation,
  useResetPassMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useUpdateUserMutation,
  useProfileQuery,
} = authApi;
