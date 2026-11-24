
const API_URL = "http://127.0.0.1:8000/api/auth";


// COMMON RESPONSE HANDLER
const handleResponse = async (response) => {

    const responseText = await response.text();

    let data = {};

    try {

        data = responseText ? JSON.parse(responseText) : {};

    } catch (error) {

        console.error("Invalid server response:", responseText);

        throw new Error(
            "Server returned HTML instead of JSON. Check Django API URL."
        );
    }

    if (!response.ok) {

        throw new Error(
            data.detail ||
            data.error ||
            JSON.stringify(data) ||
            "Request failed"
        );
    }

    return data;
};


// CUSTOMER REGISTRATION
export const registerUser = async (userData) => {

    const response = await fetch(`${API_URL}/register/`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({

            username: userData.username,
            email: userData.email,
            password: userData.password,
            password2: userData.password2,

        }),

    });

    return await handleResponse(response);
};


// CUSTOMER LOGIN USING EMAIL
// export const loginUser = async (email, password) => {

//     const response = await fetch(`${API_URL}/login/`, {

//         method: "POST",

//         headers: {
//             "Content-Type": "application/json",
//         },

//         body: JSON.stringify({

//             email: email,
//             password: password,

//         }),

//     });

//     const data = await handleResponse(response);

//     if (!data.token) {

//         throw new Error("Login successful but authentication token is missing.");
//     }

//     localStorage.setItem("token", data.token);

//     return data;
// };



export const loginUser = async (email, password) => {

    const response = await fetch(
        "http://127.0.0.1:8000/api/auth/login/",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        }
    );

    const responseText = await response.text();

    let data;

    try {
        data = JSON.parse(responseText);
    } catch (error) {
        console.error("Server returned:", responseText);
        throw new Error("Django returned HTML instead of JSON.");
    }

    if (!response.ok) {
        throw new Error(
            data.error || data.detail || "Login failed"
        );
    }

    localStorage.setItem("token", data.token);

    return data;
};


// CUSTOMER LOGOUT
export const logoutUser = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
        localStorage.removeItem("token");
        return;
    }

    const response = await fetch(`${API_URL}/logout/`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            "Authorization": `Token ${token}`,

        },

    });

    const data = await handleResponse(response);

    localStorage.removeItem("token");

    return data;
};
