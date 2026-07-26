import "./Notification.css";

function Notification() {
  const notifications = [
    {
      id: 1,
      title: "Resume Analysis Completed",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "New Job Recommendation",
      time: "10 min ago",
    },
    {
      id: 3,
      title: "Interview Scheduled",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="notification-card">
      <h2>Notifications</h2>

      {notifications.map((item) => (
        <div className="notification-item" key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Notification;