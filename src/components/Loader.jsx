import loaderAnimatedLogo from "../assets/images/logo-animated.gif";

function Loader() {
    return ( 
        <div className="loader">
            <img src={loaderAnimatedLogo} alt="apple loader" className="logo" />
        </div>
     );
}

export default Loader;