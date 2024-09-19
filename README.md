
# 1. Project Overview
This is a web page created to obtain numerical reviews from users.

# 2. Languages
This website is used these languages below.  
HTML/Sass(css), JavaScript

# 3. Installation
Please reffer to this URL to clone the folder.  
[How to clone the folder](https://docs.github.com/ja/repositories/creating-and-managing-repositories/cloning-a-repository)

# 4.Script Usage
It is devided in 2 script files.

* script.js  
    Overview
     This script implements the ability for users to select a rating as feedback on a web page and send that rating to the next page. The ratings are displayed in 1-5 buttons, and when the user clicks one of the rating button, that button is highlighted. The user then clicks on the Submit Ratings button to send the ratings and move to the next page.

    ## Feature details
    **1, Selection of ratings and how to display of active status**

    In the script, a click event is set for all evaluation buttons (class ```review__numberItem```). When the user clicks on a rating button, a class called ```'is-active'``` is added to that button and the class is removed from all other buttons. This class will visually highlight the selected evaluation button.

    **2, Holding Valuation**

    When a user clicks on a rating button, the value of the custom attribute ```data-rating``` set on the button is retrieved and stored in the variable ```selectedRating```. The ```selectedRating``` will contain the rating selected by the user (Number between 1 and 5).

    **3, Sending of Valuation**

    When the submit button (```submit__btn``` class) is clicked, it checks if ```selectedRating``` is null. If no rating is selected, a warning message is displayed and the user is prompted to select a rating. If a rating is selected, it will redirect to the thank you page with that rating as a query parameter.


* thanks.js  
    Overview
    This script provide the function to display the rating sent from the previous page on the thanks page.

    ## Feature details
    **1, Get ratings from query parameters**

    In order to get the query parameter from current URL, it is used ```URLSearchParams``` object.

    **2, Display rating**

    If the rating retrieved exists, it is displayed on the element in the page (the element with the ``userRating`` ID). If the rating does not exist, it is displayed as 'none'.

 ## Excample
When the user selects a rating of “4” on the feedback page and clicks the “submit” button, they are redirected to the thanks.html page and the URL is appended with ```?rating=4```.
Upon arrival at thanks.html, thanks.js will read the query parameter and display something like ```“Your rating: 4”``` in the page.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
