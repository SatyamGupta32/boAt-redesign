# boAt Redesign

This project is a redesign of the boAt website, built using React and Vite for a modern and efficient development experience.

## Features

- **React + Vite**: Fast and optimized development setup with Hot Module Replacement (HMR).
- **Responsive Design**: Ensures a seamless experience across devices.
- **Modern UI/UX**: Redesigned interface for improved usability and aesthetics.
- **Dynamic Components**: Includes reusable components like `Carousel`, `Categories`, and `ProductList`.
- **Routing**: Implements React Router for seamless navigation between pages.
- **Data-Driven Content**: Uses structured data for products, categories, and blogs.

## Folder Structure

### `src/`
- **`components/`**: Contains reusable components such as:
  - `Carousel`: Displays featured products with animations.
  - `Categories`: Lists product categories dynamically.
  - `Footer` and `Header`: Common layout components.
  - `BlogContent` and `BlogList`: For blog-related pages.
  - `ContactContent`: Handles the contact page content.
  - `ProductList` and `ProductDetail`: For showcasing products.
- **`data/`**: Includes structured data files:
  - `categories.js`: Data for product categories.
  - `posts.js`: Blog post data.
  - `product.js`: Product details and specifications.
- **`pages/`**: Contains main pages like:
  - `Home.jsx`: The homepage with a carousel, categories, and featured products.
  - `About.jsx`: About us page with company details and achievements.
  - `Blogs.jsx`: Blog listing and detail pages.
  - `Contact.jsx`: Contact page with relevant information.
- **`assets/`**: Stores static assets like fonts or additional resources.
- **`App.jsx`**: Main application file with routing setup.
- **`App.style.js`**: Global styles using styled-components.

### `public/`
- **`images/`**: Contains all image assets used across the site, such as product images, banners, and icons.

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/boAt-redesign.git
   ```
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.

## Tools and Technologies

- **React**: For building the user interface.
- **Vite**: For fast builds and HMR.
- **React Router**: For client-side routing.
- **Styled-Components**: For modular and reusable CSS.
- **ESLint**: For maintaining code quality and consistency.

## How to Use

1. Navigate to the homepage to explore featured products and categories.
2. Use the navigation bar to access pages like About, Blogs, and Contact.
3. Browse the product list and view detailed product information.
4. Read blog posts for the latest updates and insights.
5. Use the contact page to get in touch with the team.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
