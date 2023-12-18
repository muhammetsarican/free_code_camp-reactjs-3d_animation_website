import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import store from "../assets/images/store.svg";

function Navbar() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={logo} alt="Apple" />
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            Store
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            Mac
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            iPad
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            iPhone
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            Watch
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            AirPods
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            Tv & Home
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            Entertainment
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            Accessories
                        </a>
                    </li>

                    <li>
                        <a href="" className="link-styled">
                            Support
                        </a>
                    </li>

                    <li>
                        <img src={search} alt="search" />
                    </li>

                    <li>
                        <img src={store} alt="store" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;