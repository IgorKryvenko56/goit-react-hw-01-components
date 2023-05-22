import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList';
import FriendListItem from './FriendListItem';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';

 export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h1>Statistics</h1>
      <Statistics title="Upload stats" stats={data} />

      <h2>My Friends</h2>
      <FriendList friends={friends} />
      <div>
        <h3>Transaction History</h3>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

 export default App;