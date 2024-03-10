import React, {useState } from 'react';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

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