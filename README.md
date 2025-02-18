# React Counter App

This is a **React-based web application** that implements a counter, user data form, rich text editor, and more. The project uses **Chakra UI** for UI components, **React Spring** for animations, and **React Router** for routing. It also integrates **React Charts** for data visualization and offers optional features like **Google Sign-In** authentication.

## Live Demo
You can view the live application at: [**neerajcounterapp.netlify.app/login**](https://neerajcounterapp.netlify.app/login)

## Features
### 1. **Counter Component**
- Buttons for increment, decrement, and reset actions.
- Background color dynamically changes based on the counter value using a linear gradient (Bezier curve).
- Reset button sets the color level back to 0.

### 2. **User Data Form**
- A form where users can input their name, address, email, and phone number.
- Auto-generates a user ID on form submission.
- Data is saved to **local storage** or **RTK**.
- Warns the user with an "unsaved changes" popup when attempting to leave the page with unsaved changes.

### 3. **Rich Text Editors**
- Users can visualize their data in a rich text editor.
- Formatting options include bold, italic, underline, and lists.
- Data persistence ensures the content remains saved.

### 4. **User Authentication (Optional)**
- Google Sign-In functionality (Currently under development).
- Email and password authentication works as expected.
- Mock authentication for validation purposes.
- Implements private and public routes based on authentication state.

### 5. **Dashboard Visualization**
- A dashboard that includes both the counter and user profile visuals.
- **React Charts** are used to display user profile trends.

## Technologies Used
- **React** (Functional components with hooks)
- **Chakra UI** (UI components)
- **React Spring** (Smooth animations)
- **React Router** (Routing)
- **TypeScript** (Type safety)
- **React Charts** (Data visualization)
- **Local Storage/RTK** (Data persistence)
- **Google Sign-In** (Optional authentication – under development)

## Installation

To run this project locally:

1. Clone the repository:

```bash
git clone https://github.com/neeraj-bn/react-dashboard-app.git
