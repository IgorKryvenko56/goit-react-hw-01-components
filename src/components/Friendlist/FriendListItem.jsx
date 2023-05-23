// import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './Friendlist.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item className="item">
      <Status className={`status ${isOnline ? 'online' : 'offline'}`}></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
};

// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };

export default FriendListItem;