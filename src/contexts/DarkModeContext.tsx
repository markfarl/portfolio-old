import { createContext, useContext, useState } from "react"

type darkContextProviderType ={
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<darkContextProviderType>({
  darkMode: false,
  toggleDarkMode: function (): void {
    throw new Error("Function not implemented.")
  }
})
const useDarkMode = () => useContext(DarkModeContext);

function DarkModeProvider({ children }: {children: JSX.Element}){
  const [ darkMode, setDarkMode] = useState(false)
  function toggleDarkMode(){
    setDarkMode(!darkMode)
  }
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}

export {DarkModeProvider, useDarkMode}


