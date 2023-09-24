import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css'
import 'assets/styles/reset.css'
import 'assets/styles/global.css'
import { store } from 'redux/app/store'
import { Provider } from 'react-redux'
import 'i18n';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
);
