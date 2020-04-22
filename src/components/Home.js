import React from "react";

const Home = () => {
  return (
    <div>
      <h1 style={{marginBottom: '2rem'}}>Techincal Assessment solutions</h1>
      <p>Click on the link on the sidebar for each question to assess solutions</p>
      <p>Below are links to the node api and react app repositories</p>
      <ul style={{margin: '2rem 0'}}>
        <li><a target="_blank" href="https://github.com/asyncmania/eu-backend">Node API</a></li>
        <li><a target="_blank" href="https://github.com/asyncmania/ec-react">React App</a></li>
      </ul>
    </div>
  );
};

export default Home;