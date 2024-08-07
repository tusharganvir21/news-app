# News App React

The "News App React" is a responsive web application built with React that aggregates and displays the latest news from various categories. It features a clean, user-friendly interface, leveraging API data to provide up-to-date news articles, ensuring users stay informed with ease.

### Project Description: News App using React
# Overview:
The News App React project is a modern web application designed to deliver real-time news updates across various categories. Built with React, it offers a responsive and intuitive user interface to keep users informed with the latest headlines effortlessly.

# Components:

- Navbar (Navbar.jsx):
```
  The navigation bar provides easy access to news categories (Technology, Business, Health, Science, Sports, Entertainment).
  Utilizes Bootstrap for responsive design and includes category selection functionality via props (setCategory).
  Newsboard (NewsBoard.jsx):
```
```
  Fetches news articles from the News API based on selected category using fetch and useState for state management.
  Displays news articles in a responsive grid layout (row-cols-* Bootstrap classes) with conditional rendering for no articles.
  Newsitem (Newsitem.jsx):
```
```
  Represents individual news items displayed within the Newsboard.
  Features a card layout (card Bootstrap class) with hover animation using CSS transitions (transform and box-shadow).
  Includes image, title, truncated description, and a "Read More" button linked to the full article.
  Technologies Used:
```

- React: Frontend library for building user interfaces.
- Bootstrap: CSS framework for responsive design and UI components. Also, i add some animations their. 
- News API: Source of real-time news data, integrated using fetch for asynchronous data fetching.
  (Note: You can generate your own api and and update that in .env file.) 

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/your-username/news-app-react.git
```

2. Navigate into the project directory:

```bash
  cd news-app-react
```
3. Install dependencies using npm:
   
```bash
  npm install
```

## Running the App
To run the app locally, use the following npm script:
```bash
  npm run dev
```

## Screenshots:
![Screenshot 2024-07-05 135250](https://github.com/user-attachments/assets/33302cb2-7288-42f0-8943-c0c65ea3da75)



## Thank You for Reading!
If you found this project useful or interesting, please consider giving it a star on GitHub. Your support is greatly appreciated!
