import Layout from '../components/Layout'
import '../styles/globals.css'
import LanguageContext from '../Contexts/LangaugeContext'
import { useState } from 'react'



function MyApp({ Component, pageProps }) {

  const [langList, setLangList] = useState();




  return (
    <LanguageContext.Provider value={langList, setLangList} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContext.Provider>

  )

}

export default MyApp
