import "bootstrap/dist/css/bootstrap.css";
import { NextPageContext } from "next";
import Navbar from "../components/global/NavBar";
import { apiGet, apiPrefixMap, apiUrlMap } from "../utils/apiUtil";

function AppComponent({ Component, pageProps, currentUser }) {
    return (
        <div>
            <Navbar currentUser={currentUser} />
            <div className="container">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

AppComponent.getInitialProps = async (context: NextPageContext) => {
    const prefix = process.browser
        ? apiPrefixMap.client
        : apiPrefixMap.authService;

    const headers = process.browser ? null : context.ctx.req.headers;

    try {
        const { data } = await apiGet(prefix, apiUrlMap.currentUser, headers);

        return {
            currentUser: data,
        };
    } catch (e) {
        console.log(e.response?.data?.customError || e.message);

        return { currentUser: null };
    }
};

export default AppComponent;
