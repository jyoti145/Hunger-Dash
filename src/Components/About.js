// import User from "./User";
// import UserClass from "./UserClass";


// const About = ()=>{
//     return(
//         <div>
//           <h1>About us</h1>
//           <h2>this is about us page</h2>

//           <User name={"jyoti swami function"} Location = {"jaipur"}/>
//           <UserClass name={"jyoti swami class"} location = {"jaipur"}/>
//         </div>
//     )
// }
// export default About;

import React from "react";

const About = () => (
  <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
    <h1 className="text-4xl font-bold text-orange-500 mb-4">About Hunger Dash</h1>
    <p className="mb-6 text-gray-700">
      Hunger Dash is your go-to app for discovering the best restaurants and food delivery options in your city. We connect you with a wide variety of cuisines, fast delivery, and a seamless ordering experience.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
    <p className="mb-6 text-gray-700">
      To deliver happiness to your doorstep by making food ordering fast, easy, and reliable.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
    <ul className="list-disc list-inside mb-6 text-gray-700">
      <li>Wide range of restaurants and cuisines</li>
      <li>Lightning-fast delivery</li>
      <li>Easy-to-use app and website</li>
      <li>Exclusive deals and discounts</li>
      <li>24/7 customer support</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
    <p className="text-gray-700">
      Have questions or feedback? Reach out at <a className="text-orange-500 underline" href="mailto:support@hungerdash.com">support@hungerdash.com</a>
    </p>
  </div>
);

export default About;