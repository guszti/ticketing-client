import Link from "next/link";

const NavBar = () => (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <Link href="/">
                <a className="navbar-brand">Ticket Storm</a>
            </Link>
            <div className="d-flex justify-content-end">
                <ul className="nav d-flex align-items-center">
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
                    <li className="nav-item">
                        <Link href="/auth/log-out">
                            <a className="nav-link" href="#">
                                Log out
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar;
