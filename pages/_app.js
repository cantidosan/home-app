import Layout from '../components/Layout'
import '../styles/globals.css'
import LanguageContext from '../Contexts/LangaugeContext'
import { useContext, useState } from 'react'



function MyApp({ Component, pageProps }) {

  //const [lang, setLangList] = useContext(LanguageContext);
  const [lang, setLangList] = useState([]);



  return (
    <LanguageContext.Provider value={{ lang, setLangList }} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContext.Provider>

  )

}

export default MyApp
