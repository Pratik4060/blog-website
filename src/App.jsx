import React from "react";

const App = () => {
  console.log(import.meta.env._APP_APPWRITE_URL);

  return (
    <div>
      <h1>blog app with appwrite</h1>
    </div>
  );
};

export default App;
