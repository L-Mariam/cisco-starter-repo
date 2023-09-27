import React, { useEffect, useState } from 'react';

function IpAddressDisplay({ ipAddressType }) {
  const [ipAddress, setIpAddress] = useState('');
  const apiUrl = ipAddressType === 'IPv4' ? 'https://api.ipify.org/?format=json' : 'https://api64.ipify.org/?format=json';

  useEffect(() => {
    async function fetchIpAddress() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.status === 200) {
          setIpAddress(data.ip);
        } else {
          setIpAddress('Error fetching IP address');
        }
      } catch (error) {
        setIpAddress('Error fetching IP address');
      }
    }

    fetchIpAddress();
  }, [ipAddressType]);

  return (
    <div className="ip-address-display">
      <h3>{ipAddressType} Address:</h3>
      <p>{ipAddress}</p>
    </div>
  );
}

export default IpAddressDisplay;