import React, { Component } from "react";
import "./App.css";
// https://github.com/vagabond-systems/cisco-task-2-model-answer
import IpAddressDisplay from "./IpAddressDisplay.js"; // Import the new component
import PacketLatencyDisplay from "./PacketLatencyDisplay.js"; // Import the new component

function Cards() {
  return (
    <div class="flex-container">
      <div>
        <IpAddressDisplay ipAddressType="IPv4" /> {/* Display IPv4 address */}
      </div>
      <div>
        <IpAddressDisplay ipAddressType="IPv6" /> {/* Display IPv6 address */}
      </div>
      <div>
        <PacketLatencyDisplay /> {/* Display packet latency */}
      </div>
    </div>
  );
}

function Header() {
  return <h2 className="header">Sextant</h2>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Body">
          <h2 className="Subheader">This is your dashboard!</h2>
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
