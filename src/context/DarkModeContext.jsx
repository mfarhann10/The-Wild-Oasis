/* eslint-disable react/prop-types */
import { createContext } from "react";

const DarkModeContext = createContext()

const initialState = {

}

function DarkModeProvider ({children}){
    return(
        <DarkModeContext.Provider>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider