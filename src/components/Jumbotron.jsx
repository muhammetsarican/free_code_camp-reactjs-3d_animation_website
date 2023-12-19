import iphone from "../assets/images/iphone-14.jpg"
import holdingIphone from "../assets/images/iphone-hand.png"
function Jumbotron() {
    const handleLearnMore=(e)=>{
        const element=document.querySelector(".sound-section");
        e.preventDefault();
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img src={iphone} alt="iPhone 14 Pro" className="logo" />
            <p className="text">Big and Bigger.</p>
            <span className="description">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">
                        Buy
                    </button>
                </li>

                <li>
                    <a href="" className="link" onClick={(e)=>handleLearnMore(e)}>
                        Learn More
                    </a>
                </li>

            </ul>
            <img src={holdingIphone} alt="Someone holding iPhone" className="iphone-img" />
        </div>
    );
}

export default Jumbotron;