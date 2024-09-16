import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const APP_URL = "/applications";

const ApplicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllApplications: builder.query({
      query: (query) => ({
        url: `${APP_URL}`,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.application],
    }),
    getSingleApplication: builder.query({
      query: (id) => ({
        url: `${APP_URL}/${id}`,
      }),
      providesTags: [tagTypes.application],
    }),
    updateApplications: builder.mutation({
      query: (data) => ({
        url: `${APP_URL}/${data?.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.application],
    }),
  }),

  // overrideExisting: true,
});

export const {
  useGetAllApplicationsQuery,
  useUpdateApplicationsMutation,
  useGetSingleApplicationQuery,
} = ApplicationApi;
