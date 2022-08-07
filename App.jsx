import React from "react";
import "./App.css";


import Pages from './firstproject/pages'
function App() {
  
  return (
    <React.Fragment className="App">
      {/* style={{ width: "50%", margin: "auto" }} */}
      {/* <div>
        <Navbar />
        <div>
          <UserItem />
        </div>
      </div> */}
      <Pages />
      {/* <Component /> */}
    </React.Fragment>
  );
}

export default App;
