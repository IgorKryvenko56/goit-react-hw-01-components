import React from 'react';
import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <li key={index}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList; 