import axios from "axios";

type ApiPrefix = "client" | "authService";

export const apiPrefixMap: { [value in ApiPrefix]: string } = {
    client: "ticketing.local",
    authService: "auth-clusterip-srv:4000",
};

type ApiUrl = "signUp" | "logIn" | "logOut" | "currentUser";

export const apiUrlMap: { [value in ApiUrl]: string } = {
    signUp: "/api/auth/sign-up",
    logIn: "/api/auth/log-in",
    logOut: "/api/auth/log-out",
    currentUser: "/api/auth/current-user",
};

export const apiGet = async (prefix: string, url: string, headers?: any) => {
    const config = !!headers ? { headers } : {};
    const response = await axios.get(`http://${prefix}${url}`, config);

    return response;
};

export const apiPost = async (
    prefix: string,
    url: string,
    body?: { [key: string]: any },
    headers?: any
) => {
    const config = headers ? { headers } : {};
    const { data } = await axios.post(`http://${prefix}${url}`, body, config);

    return data;
};
