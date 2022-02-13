import Link from "next/link";

const Navbar = () => {
  
    return (
        <nav 
            className="navbar navbar-expand-lg text-white position-absolute w-100" 
            style={{
                height: '80px',
                backgroundColor: '#01896a'
            }}  
        >
            <div className="container">
                <Link href="/">Turz</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="navbar-toggler-icon fas fa-align-justify"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-2">
                            <Link aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link aria-current="page" href="/">All Products</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link aria-current="page" href="/">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;