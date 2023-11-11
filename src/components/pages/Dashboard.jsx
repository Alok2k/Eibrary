import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar";
import Piechart from "./Piechart";
import books from "./books.json";

const Dashboard = () => {
  const [totalSubscribeCount, setTotalSubscribeCount] = useState(
    parseInt(localStorage.getItem("subscribeCount")) || 0
  );

  const [totalQuizScore, setTotalQuizScore] = useState(
    parseInt(localStorage.getItem("totalScore")) || 0
  );

  useEffect(() => {
    const savedCount = parseInt(localStorage.getItem("subscribeCount"));
    const savedScore = parseInt(localStorage.getItem("totalScore"));
    if (!isNaN(savedCount, savedScore)) {
      setTotalSubscribeCount(savedCount);
      setTotalQuizScore(savedScore);
    }
  }, []);

  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("userlibrary")) || [];
    const totalUsersCount = users.length;
    setTotalUsers(totalUsersCount);
  }, []);

  const [topSubscribers, setTopSubscribers] = useState([]);

  useEffect(() => {
    // Mock users' scores
    const usersScores = [
      { username: "Alok", score: 2000 },
      { username: "Sannu", score: 1000 },
      { username: "Abhi", score: 5000 },
    ];

    const sortedSubscribers = usersScores.sort((a, b) => b.score - a.score);

    setTopSubscribers(sortedSubscribers);
  }, []);

  return (
    <div className="ok">
      <Sidebar />
      <div className="dashboard-container">
        <div className="dashboard-card">
          <h2>Total Points</h2>
          <p>Points Scored by Subscription</p>
          <p className="p1 circle">{totalQuizScore}</p>
        </div>
        <div className="dashboard-card">
          <h2>Books Subscribed</h2>
          <p>Number of Books read</p>
          <p className="p2 circle">{totalSubscribeCount}</p>
        </div>
        <div className="dashboard-card">
          <h2>Active Subscription</h2>
          <p>Number of Books currently reading</p>
          <p className="p3 circle">{totalSubscribeCount}</p>
        </div>
        <div className="bottom">
          <div className="dashboard-table">
            <h2>Top Subscribers</h2>
            <table className="tbl">
              <tr>
                <th>Name</th>
                <th>Points</th>
              </tr>
              {topSubscribers.map((subscriber, index) => (
                <tr key={index}>
                  <td>{subscriber.username}</td>
                  <td>{subscriber.score}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="dashboard-chart">
            <h2>Trend Chart</h2>
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
