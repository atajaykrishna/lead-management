
Demo : https://prashant-machine-tools.netlify.app/

# Marketing Data Collection Web Application

Welcome to the Marketing Data Collection Web Application! This application is designed to simplify the process of collecting and managing marketing data for an organization. It provides an intuitive user interface and several useful features to streamline data entry, organization, and follow-up activities. 

## Features

### Data Collection Form
The home page of the application includes a user-friendly form where users can enter customer information. The form includes fields such as customer name, phone number, address, and level of interest. Additionally, users can indicate whether a quotation was given or not. The form also captures the dates of the last call and the scheduled next call, facilitating efficient tracking and follow-up.

### Customer Data Page
After submitting the form, users are redirected to a dedicated page that displays all the collected customer data. The data is presented in a table format, providing a comprehensive view of the customer database. Users can easily view and edit customer data enabling effective lead management.

### Today's Call Page
The application includes a separate page called "Today's Call" that dynamically shows data for customers whose next call date matches the current date. This feature helps prioritize follow-up activities by highlighting the contacts that require attention on the current day. Users can quickly access the relevant information and efficiently manage their daily calls.

## Installation

To run the Marketing Data Collection Web Application locally, follow these steps:

1. Clone the repository: 
    - git clone https://github.com/Kishanthakur/prashant-machine-tools
2. Navigate to the project directory: 
    - cd marketing-data-collection-app
3. Install the dependencies:
    - npm install
    -  npm install react
    -  npm install react-router-dom
    -  npm install firebase
    -  npm i react-toastify@9.0.3
    -  npm install uid
4. Create a Firebase project and set up the necessary configurations (e.g., API keys, database).
   Replace the Firebase configuration placeholders in the project with your own Firebase credentials
5. Start the application:
    - npm start
6. Open your browser and visit http://localhost:3000 to access the application


## Tech Stack

- ReactJS
- CSS
- React Toastify (for displaying notifications)
- React Router DOM (for navigation)
- Firebase (for data storage)
- Firebase UID (for unique user identification)

## Versions

- "firebase": "^9.21.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-scripts": "^2.1.3",
- "react-toastify": "^9.0.3",
- "uid": "^2.0.2",


## Usage

1. Fill out the form on the home page with the required customer information.
2. Click the "Save" button to submit the form and navigate to the customer data page.
3. On the customer data page, you can view and edit the collected information.
4. To view customers with a next call date matching the current day, navigate to the "Today's Call" page.


Thanks You!
