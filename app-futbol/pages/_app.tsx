import { Header } from '@/layout/Header'
import { AppProps } from 'next/app';
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { useEffect } from 'react';

export default function App(appProps: AppProps) {
  const { Component, pageProps } = appProps;

  useEffect(() => {
    require('@/styles/globals.css');
  }, []);

  return (
<div className='bg-cesped w-full h-full '>
<Provider store={store}>
    <Header/>



    <Component {...pageProps} />
    </Provider>
    </div>

  )
}
