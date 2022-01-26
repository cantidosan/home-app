import React, { useContext, useState } from "react";



const LanguageContext = React.createContext();

export const useLanguages = () => useContext(LanguageContext)

export default LanguageContext;
