import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  // useEffect(() => {
  //   const socket = io('http://localhost:8081/orders'); // Replace with your server URL

  //   // Listen for order notifications
  //   socket.on('orderNotification', (data) => {
  //     setNotifications((prevNotifications) => [data, ...prevNotifications]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <div>
      <h2>Order Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;