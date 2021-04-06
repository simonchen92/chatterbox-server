const users = [];

const addUser = ({ id, name, room }) => {
  name = name;
  room = room;
  _name = name;

  const exisitingUsers = users.filter(
    (user) => user.room === room && user._name === name
  );

  const user = { id, name, room, _name };
  if (exisitingUsers.length) {
    user.name += exisitingUsers.length + 1;
  }

  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    let user = users.splice(index, 1)[0];
    return user;
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
