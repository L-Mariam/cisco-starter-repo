import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

function PacketLatencyDisplay() {
  const [latency, setLatency] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Create a WebSocket connection to ws://localhost:55455
    const client = new W3CWebSocket('ws://localhost:55455');

    client.onopen = () => {
      console.log('WebSocket Client Connected');
      setWs(client);
    };

    client.onmessage = message => {
      console.log('Received message:', message.data);
      const packetData = JSON.parse(message.data);
      const packetTimestamp = packetData.timestamp;
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    client.onclose = () => {
      console.log('WebSocket Connection Closed');
      setLatency(null);
      setWs(null); // Clear the ws variable when the connection is closed
    };

    client.onerror = error => {
      console.error('WebSocket Error:', error);
    };

    // Clean up the WebSocket connection on unmount
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [ws]);

  return (
    <div className="packet-latency-display">
      <h3>Packet Latency:</h3>
      {latency !== null ? (
        <p>{latency} ms</p>
      ) : (
        <p>Connecting to Pylon...</p>
      )}
    </div>
  );
}

export default PacketLatencyDisplay;