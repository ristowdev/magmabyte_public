import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api",
});

export default createApi({
  reducerPath: 'BaseApi',
  baseQuery,
//   tagTypes: ['Services', 'Locations'],
  endpoints: () => ({}),
});
 