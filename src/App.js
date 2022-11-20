import Cal from "@calcom/embed-react";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-center">
      <Cal
        calLink="vitiya99/30min" // this link should get from query params (friend's username/event-type name)
        config={{
          name: "Viraj Lakshitha Bandara", // new comer's name
          email: "virajlakshithabandara@gmail.com", // new comer's email
          notes: "Sample Meeting", // This should be dynamic (Platform Name - Meeting with ${friend`s_name})
        }}
      />
    </div>
  );
};

export default App;