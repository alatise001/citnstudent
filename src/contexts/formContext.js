'use client';
import React from "react";

export const FormContext = React.createContext();

function FormContextProvider({ children }) {
    const [isform, setFormData] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("citnstudentform");
            if (saved) {
                return JSON.parse(saved);
            }
        }
        return {
            fullname: "",
            email: "",
            telnumber: "",
            qualification: "None",
        };
    });

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("citnstudentform", JSON.stringify(isform));
        }
    }, [isform]);

    return (
        <FormContext.Provider value={{ isform, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}

export default FormContextProvider;
