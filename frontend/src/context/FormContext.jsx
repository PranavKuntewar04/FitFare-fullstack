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
        inputState: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        review: "",
        location: "",
        gyms: "",
        rating: "",
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

            case "rating":
                if (!value.trim()) {
                    errorMessage = "Rating is required.";
                } else if (isNaN(value) || value < 1 || value > 5) {
                    errorMessage = "Rating must be a number between 1 and 5.";
                }
                break;

            case "review":
                if (!value.trim()) {
                    errorMessage = "Please provide a review.";
                } else if (value.length < 10) {
                    errorMessage = "Review must be at least 10 characters long.";
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

    const { lastName, phoneNumber, ...requiredInputs } = data;

    const canSubmit =
        Object.values(requiredInputs).every((value) => value.trim() && !errors[value]) &&
        page === Object.keys(title).length - 1;

    return (
        <FormContext.Provider
            value={{
                title,
                page,
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
