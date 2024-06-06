import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const { user, setUser } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First Name is required";
        if (!formData.lastName) tempErrors.lastName = "Last Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form data submitted: ", formData);
            setUser(formData);
        }
    };

    const handleLogout = () => {
        setUser(null);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        });
        setErrors({});
    };

    return (
        <div>
            {user ? (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">

                    <button
                        onClick={handleLogout}
                        className="mt-2 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default Login;
