// src/services/authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tree-learning-app.alwaysdata.net', // URL de l'API Symfony
    credentials: 'include',
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, {email: string, password: string}>({
      query: (credentials) => ({
        url: '/api/login_check',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: any) => {
        if (response?.token) {
          localStorage.setItem('accessToken', response.token)
        }
        return response;
      }
    }),
    getModules: builder.query<any, void>({
      query:() => "/api/modules"
    })
  }),
  
});

export const { useLoginMutation } = authApi;
