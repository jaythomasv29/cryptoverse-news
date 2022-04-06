# CryptoVerse - A crypto news app to discover te latest trends

## Ant Design CSS Library (similar to MaterialUI)
  * Various CSS styling and Icons to give a proper layout to all pages in the React App
## React-Router-Dom@5.3 for client side routing
  * Utilized `<Switch>, <Router>, <Link>`, and other various components available from `react-router-dom`

## Redux Toolkit (RTK)
  * Configure store using `configureStore` function
  * Wrap `<App>` with `<Provider>` HOC to allow access to store
  * use `createApi` to define a set of endpoints and how to retrieve data
  ``` export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/coins`)
    })
  })
})
  * create services

export const {
    useGetCryptosQuery,
} = cryptoApi;
```