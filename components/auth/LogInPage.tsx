import { useState } from "react";
import { apiPost, apiPrefixMap, apiUrlMap } from "../../utils/apiUtil";
import { useRouter } from "next/router";

const LogInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const submit = async () => {
        try {
            await apiPost(apiPrefixMap.client, apiUrlMap.logIn, {
                email,
                password,
            });

            router.push("/");
        } catch (e) {
            console.log(e.response.data.customError);
        }
    };

    return (
        <div className="mt-5">
            <h1 className="display-1">Log In</h1>
            <div className="input-group mb-3">
                <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                >
                    Email
                </span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-group mb-3">
                <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                >
                    Password
                </span>
                <input
                    type="password"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={(e) => {
                    e.preventDefault();

                    submit();
                }}
            >
                Submit
            </button>
        </div>
    );
};

export default LogInPage;
