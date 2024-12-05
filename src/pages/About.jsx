import React from 'react';

function About() {
  return (
    <div className='bg-slate-600 p-8 text-white rounded-2xl'>
      <h1 className="text-4xl font-bold mb-6">E-commerce React Project Documentation</h1>

      <section>
        <h2 className="text-3xl font-semibold mt-4">Overview</h2>
        <p>
          This project is a fully functional e-commerce web application built with <strong>React</strong> and <strong>React Context API</strong> for state management. The application provides a seamless shopping experience where users can browse products, add them to the cart, adjust quantities, and view their total cart price. It also includes a responsive user interface designed with <strong>Tailwind CSS</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-4">Features</h2>
        <h3 className="text-2xl font-semibold mt-4">1. Product Listing Page</h3>
        <ul className="list-disc ml-8">
          <li>Displays a list of products fetched from an external API (<code>https://fakestoreapi.com/products</code>).</li>
          <li>Each product shows an image, title, and price.</li>
          <li>A product can be added to the cart by clicking an "Add" button.</li>
          <li>The product title is truncated after four words for better UI readability.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">2. Cart Page</h3>
        <ul className="list-disc ml-8">
          <li>Displays all the products added to the cart.</li>
          <li>Each product entry shows the product name, quantity, price per unit, and the total price for that product.</li>
          <li>The cart allows users to increment or decrement the quantity of each product.</li>
          <li>The total price of all products in the cart is displayed at the bottom.</li>
          <li>If the cart is empty, a message is shown: "Nothing to show."</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">3. Navigation</h3>
        <p>A <code>Navbar</code> component provides links to navigate between the <strong>Home</strong>, <strong>Product</strong>, <strong>About</strong>, <strong>Login</strong>, and <strong>Cart</strong> pages.</p>

        <h3 className="text-2xl font-semibold mt-4">4. State Management</h3>
        <p>
          The application uses the <strong>React Context API</strong> to manage and share state between components. The <code>CartContextProvider</code> provides state and functions to update the cart, such as <code>handleIncrease</code>, <code>handleDecrease</code>, and <code>getLimitedTitle</code>.
        </p>

        <h3 className="text-2xl font-semibold mt-4">5. Responsive Design</h3>
        <p>The layout adapts to different screen sizes using <strong>Tailwind CSS</strong> for responsive styling.</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-4">Key Files and Their Roles</h2>
        <ul className="list-decimal ml-8">
          <li><code>CartContext.jsx</code>: Contains the <code>CartContext</code> to share the cart data and functions across components.</li>
          <li><code>CartContextProvider.jsx</code>: Provides the context with state and functions for managing the cart.</li>
          <li><code>Product.jsx</code>: Displays the product catalog and handles adding products to the cart.</li>
          <li><code>Cart.jsx</code>: Displays the cart contents and allows modification of product quantities.</li>
          <li><code>App.jsx</code>: Sets up the router and wraps the application in the <code>CartContextProvider</code>.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-4">Installation and Setup</h2>
        <h3 className="text-2xl font-semibold mt-4">Prerequisites</h3>
        <p><strong>Node.js</strong>: Make sure Node.js is installed. You can download it from <a href="https://nodejs.org/" className="text-blue-300 underline">nodejs.org</a>.</p>

        <h3 className="text-2xl font-semibold mt-4">Steps to Run the Project Locally</h3>
        <ol className="list-decimal ml-8">
          <li>Clone the repository:</li>
          <pre className="bg-gray-800 p-4 rounded">
            <code>git clone https://github.com/esyice/Brainwave-E-com.git</code>
          </pre>
          <li>Navigate to the project directory:</li>
          <pre className="bg-gray-800 p-4 rounded">
            <code>cd your-project-name</code>
          </pre>
          <li>Install dependencies:</li>
          <pre className="bg-gray-800 p-4 rounded">
            <code>npm install</code>
          </pre>
          <li>Run the development server:</li>
          <pre className="bg-gray-800 p-4 rounded">
            <code>npm start</code>
          </pre>
          <li>Visit <code>http://localhost:3000</code> in your browser to see the application in action.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-4">API Integration</h2>
        <p>The project fetches product data from <strong>Fake Store API</strong> (<code>https://fakestoreapi.com/products</code>) using the <strong>fetch</strong> API within a <code>useEffect</code> hook in <code>CartContextProvider</code>.</p>
        <p>The User data from <strong>Fake Store API</strong> (<code>https://fakestoreapi.com/users?limit=5</code>) using the <strong>fetch</strong> API within a <code>useEffect</code> hook in <code>CartContextProvider</code>.</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-4">State Management Details</h2>
        <h3 className="text-2xl font-semibold mt-4">Context API</h3>
        <p>
          <strong>CartContext</strong>: Provides a way to access the cart state and helper functions (<code>handleIncrease</code>, <code>handleDecrease</code>, <code>getLimitedTitle</code>) from any component within the <code>CartContextProvider</code>.
        </p>
        <p>
          <strong>CartContextProvider</strong>: Manages the state of the <code>data</code> (product data) and <code>totalCount</code> (total items in the cart). It also defines the logic for updating the cart through <code>handleIncrease</code> and <code>handleDecrease</code>.
        </p>

        <h3 className="text-2xl font-semibold mt-4">Functions</h3>
        <ul className="list-disc ml-8">
          <li><code>handleIncrease(id)</code>: Increases the count of a product with the given <code>id</code> and updates <code>totalCount</code>.</li>
          <li><code>handleDecrease(id)</code>: Decreases the count of a product with the given <code>id</code> (if greater than 0) and updates <code>totalCount</code>.</li>
          <li><code>getLimitedTitle(title)</code>: Truncates the title to the first four words and appends "..." if it is longer than four words.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-4">Future Enhancements</h2>
        <ul className="list-disc ml-8">
          <li>Implement user authentication and session management.</li>
          <li>Add a checkout page with payment processing integration.</li>
          <li>Improve accessibility for better user experience.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-4">Credits</h2>
        <p>
          <strong>React</strong> for building the user interface.
          <br />
          <strong>React Context API</strong> for state management.
          <br />
          <strong>Tailwind CSS</strong> for responsive and modern styling.
          <br />
          <strong>Fake Store API</strong> for providing product data for this project.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mt-4">Contact</h2>
        <p>
          For any questions or feedback, you can contact the project creator at <a href="egzice@gmail.com" className="text-blue-300 underline">egzice@gmail.com</a> or visit the <a href="https://github.com/esyice/E-com" className="text-blue-300 underline">project repository</a>.
        </p>
      </section>
    </div>
  );
}

export default About;
