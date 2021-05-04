import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { apiPrefixMap, apiUrlMap, apiPost } from "../../utils/apiUtil";

type OwnProps = {
    currentUser: { email: string; id: string };
};

const NavBar: FC<OwnProps> = ({ currentUser }) => {
    const router = useRouter();

    const logOut = async () => {
        try {
            await apiPost(apiPrefixMap.client, apiUrlMap.logOut);

            router.push("/auth/log-in");
        } catch (e) {
            console.log(e.response.data.customError);
        }
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Ticket Storm</a>
                </Link>
                <div className="d-flex justify-content-end">
                    <ul className="nav d-flex align-items-center">
                        {!!currentUser ? (
                            <li className="nav-item" onClick={logOut}>
                                <a className="nav-link" href="#">
                                    Log out
                                </a>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link href="/auth/sign-up">
                                        <a className="nav-link" href="#">
                                            Sign Up
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/auth/log-in">
                                        <a className="nav-link" href="#">
                                            Log In
                                        </a>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
