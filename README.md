# KigaluXe Frontend

KigaluXe is a real estate web app that facilitates users to rent and buy properties online. The app features a unique referral system allowing users to share properties and earn commissions on their shares.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

KigaluXe's frontend is designed to provide a seamless and intuitive user experience for browsing, renting, and buying properties. Users can also share properties on social media and earn commissions for successful referrals.

## Tech Stack

- **Framework**: React
- **State Management**: Redux
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **API**: Axios
- **Build Tool**: Webpack

## Features

- User Authentication
- Property Search and Filters
- Property Details Page
- User Dashboard
- Referral System with Commission Tracking
- Responsive Design

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/kigaluxe-frontend.git
   cd kigaluxe-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project

To start the development server, run:

```bash
npm start
# or
yarn start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
kigaluxe-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

- **public/**: Contains the public assets and the main HTML file.
- **src/assets/**: Static assets like images and fonts.
- **src/components/**: Reusable React components.
- **src/pages/**: Page components for different routes.
- **src/redux/**: Redux setup including actions, reducers, and store configuration.
- **src/services/**: API calls and external service integrations.
- **src/styles/**: Global styles and Tailwind CSS configuration.
- **src/utils/**: Utility functions and helpers.
- **App.js**: Main app component.
- **index.js**: Entry point for the React application.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact us at:

- **Email**: support@kigaluxe.com
- **GitHub**: [https://github.com/GammaGeeks/kigaluxe](https://github.com/GammaGeeks/kigaluxe)
