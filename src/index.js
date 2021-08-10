// How to get the content to show on the screen with React app
// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// This code helps automatically updating the page every time we make chages without refreshing the page.
if (module.hot) {
  module.hot.accept();
}
// declare this just for experimenting of how to reference JS variables in JSX
function getButtonText() {
  return 'Click on me!';
}
// 2) Create a React component
const App = () => {
  // declare this just for experimenting of how to reference JS variables in JSX
  const buttonText = { text: ['Click me!'] };
  const labelName = 'Enter Name:';
  // Returns JSX
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelName}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// 3) Take the React component and show it on the screen
ReactDOM.render(
  // 1st argument: putting App componet into JSX tag, which looks like HTML tag
  // 2nd argument: is a referrence to a DOM element that already exist inside HTML file(in public folder).
  // Everytime that somebody goes to localhost:3000, this HTML file get sent to them
  <App />,
  document.querySelector('#root')
);
