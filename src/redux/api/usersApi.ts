import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const APP_URL = "/users";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (query) => ({
        url: `${APP_URL}`,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.users],
    }),
  }),

  // overrideExisting: true,
});

export const { useGetAllUsersQuery } = usersApi;
