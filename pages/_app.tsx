import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/global/NavBar";
import { apiGet, apiPrefixMap, apiUrlMap } from "../utils/apiUtil";

function AppComponent({ Component, pageProps }) {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

AppComponent.getInitialProps = async (condext) => {
    const prefix = process.browser
        ? apiPrefixMap.client
        : apiPrefixMap.authService;

    try {
        const user = await apiGet(apiPrefixMap.client, apiUrlMap.currentUser);

        return { props: { currentUser: user } };
    } catch (e) {
        console.log(e.message);

        return {};
    }
};

export default AppComponent;
