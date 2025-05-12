import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    const [title, setTitle]= useState({
        0: "Home",
        1: "Location",
        2: "Gyms",
        3: "Feedback",
    });
    const [page, setPage] = useState(0);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        lat: "",
        lng: ""
    });


    const [errors, setErrors] = useState({});

    const validateInput = (name, value) => {
        let errorMessage = "";

        switch (name) {
            case "firstName":
            case "lastName":
                if (!value.trim()) {
                    errorMessage = "This field is required.";
                } else if (!/^[A-Za-z]+$/.test(value)) {
                    errorMessage = "Only alphabets are allowed.";
                }
                break;

            case "email":
                if (!value.trim()) {
                    errorMessage = "Email is required.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    errorMessage = "Please enter a valid email address.";
                }
                break;

            case "phoneNumber":
                if (!value.trim()) {
                    errorMessage = "Phone number is required.";
                } else if (!/^[0-9]{10}$/.test(value)) {
                    errorMessage = "Phone number must be 10 digits.";
                }
                break;

            case "postalCode":
                if (!value.trim()) {
                    errorMessage = "Postal code is required.";
                } else if (!/^\d{5}(-\d{4})?$/.test(value)) {
                    errorMessage = "Please enter a valid postal code.";
                }
                break;

            default:
                break;
        }

        return errorMessage;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validate input and update errors
        const errorMessage = validateInput(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    const { lat, lng, ...requiredFields } = data;

    const canSubmit = Object.values(requiredFields).every(
        (value) => typeof value === "string" && value.trim() !== ""
    );

    return (
        <FormContext.Provider
            value={{
                title,
                page,
                data,
                setPage,
                setData,
                handleChange,
                canSubmit,
                setTitle,
                errors,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
