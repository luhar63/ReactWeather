var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title"> About! </h1>
      <p>
        This is a weather application build on React. I have built this for Complete react web developer course.
      </p>
      <p>
        Here are some of the tools that i used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open weather Map</a> - I used open weather map to get weather data by city name .
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
