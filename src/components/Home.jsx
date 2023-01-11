import React from "react";
import Calendar from "./Calendar/CalendarView";
import Form from "./Form/Form";
import Search from "./Search/Search";
const Home = () => {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Search />;
      break;
    case "/form":
      component = <Form />;
      break;
    case "/appointments":
      component = <Calendar />;
      break;
    default:
      console.log("Error in the switch navigation statement");
      break;
  }
  return (
    <div>
      <nav>
        <ul className="ul-container">
          <li>
            <button>
              <a href="/">Search</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/form">Form</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/appointments">Appointments</a>
            </button>
          </li>
        </ul>
      </nav>

      {component}
    </div>
  );
};

export default Home;
