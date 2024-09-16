/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setUser } from "../features/authSlice";
import { tagTypesList } from "../tagTypes";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.10.138:8000/api/v1",
  prepareHeaders: (headers, { getState }) => {
    const otpToken = sessionStorage.getItem("token");
    const forgotPasswordToken = sessionStorage.getItem("forgotPasswordToken");
    const token = (getState() as any).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    if (otpToken) {
      headers.set("token", otpToken);
    }
    if (forgotPasswordToken) {
      headers.set("token", forgotPasswordToken);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const res = await fetch(
      `http://192.168.10.138:8000/api/v1/auth/refresh-token`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();
    if (data?.data?.accessToken) {
      const user = api.getState().auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  // Handle meta for pagination
  // if (result?.data?.meta) {
  //   result = {
  //     data: result?.data?.data,
  //     meta: result?.data?.meta,
  //   };
  // }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,

  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
