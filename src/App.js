import logo from './logo.svg';
import './App.css';
// import image from "../src/images/"

function App() {
  return (
    <div>
      {/* navbar */}
      <div >
        <ul className="navbar">
          <li><p>HOME</p></li>
          <li><p>PRODUCTS</p></li>
          <li><p>STUDENT PROJECTS</p></li>
          <li><p>MINI PROJECTS</p></li>
          <li><p>SENSORS & MODULES</p></li>
          <li><p>STEM KITS</p></li>
          <li><p>BLOGS</p></li>
          <li className="learning"><p>LEARNING CENTER</p></li>

        </ul>
      </div>
      {/* features */}
      <div className="features">
        <div className="card">
          <div className="logo">
            {/* <i class="fa fa-check"></i> */}
            <img src="data:image/jpeg;base64,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"></img>
          </div>
          <div className="heading">
            <h3>High Quality</h3>
          </div>
          <div className="content">
            <p>Buy high reliable products for your critical projects</p>
          </div>
        </div>
        <div className="card">
          <div className="logo">
            {/* <i class="fa fa-check"></i> */}
            <img src="data:image/png;base64,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" ></img>
          </div>
          <div className="heading">
            <h3>Fast Delivery</h3>
          </div>
          <div className="content">
            <p>99% of orders are shipped within 24Hours</p>
          </div>

        </div>
        <div className="card">
          <div className="logo">
            {/* <i class="fa fa-check"></i> */}
            <img src="data:image/png;base64,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"></img>
          </div>
          <div className="heading">
            <h3>Secure Checkout</h3>
          </div>
          <div className="content">
            <p>We follow highest security standards to make your transaction safe</p>
          </div>

        </div>
        <div className="card">
          <div className="logo">
            {/* <i class="fa fa-check"></i> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ejAlJ701lCO2J6r5onaTP3d7GyWXHZQXPQ&usqp=CAU"></img>
          </div>
          <div className="heading">
            <h3>Awesome Support</h3>
          </div>
          <div className="content">
            <p>Our support lines are open from 10am to 6pm, to support all your queries</p>
          </div>

        </div>
        <div className="card">
          <div className="logo">
            {/* <i class="fa fa-check"></i> */}
            <img src="data:image/png;base64,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"></img>
          </div>
          <div className="heading">
            <h3>Free Delivery</h3>
          </div>
          <div className="content">
            <p>Now avail free shipping on all orders above Rs.499/-, TnC* apply</p>
          </div>
        </div>

      </div>

      {/* footer */}

      <div className="footer">
        <div className="section">
          <p className="logo-head">PANTECH SOLUTIONS</p>
          <p className="card-logo">
            <span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
            <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
            <span><i class="fa fa-google-plus" aria-hidden="true"></i></span>
            <span><i class="fa fa-pinterest-p" aria-hidden="true"></i></span>
          </p>
          <p>Pantech Prolabs India Pvt ltd.</p>
          <p>No.8, Natarajan Street,Nookampalayam Road,Chemmencherry,Sholinganallur, Chennai-600 119.</p>
          <p className="phone">Phone: 91 - 9840974408/9003113840</p>
          <p>?? 2020 Pantech ProLabs India Pvt Ltd.</p>
          <p>Trademarks and brands</p>

        </div>
        <div className="section">
          <p className="head">INFORMATION</p>
          <li>Warranty Information</li>
          <li>Return Policy</li>
          <li>Cancellation Order</li>
          <li>Holidays</li>
          <li>Terms for Software</li>
          <li>rohs</li>
          <li>Dealership</li>
          <li>Shipping Policy</li>
        </div>
        <div className="section">
          <p className="head">COMPANY</p>
          <li>About Us</li>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Contact Us</li>
        </div>

        <div className="section">
          <p className="head">CONTACT US</p>
          <li>Blog</li>
          <li>Videos</li>
          <li>Presentations</li>
          <li>Verify Certificate</li>
        </div>
        <div className="section">
          <p className="head">SUBSCRIBE US</p>
          <p className="subscribe">
            <span>
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </span>
            <span className="input">
              <input type="text" placeholder="Enter Your Email"></input>
            </span>
          </p>
          <p className="card-logo">
            <span><i class="fa fa-cc-visa" aria-hidden="true"></i></span>
            <span><i class="fa fa-cc-mastercard" aria-hidden="true"></i></span>
            <span><i class="fa fa-cc-paypal" aria-hidden="true"></i></span>
            <span><i class="fa fa-cc-discover" aria-hidden="true"></i></span>
            <span><i class="fa fa-cc-amex" aria-hidden="true"></i></span>
          </p>
        </div>
      </div>


    </div>
  );
}

export default App;
