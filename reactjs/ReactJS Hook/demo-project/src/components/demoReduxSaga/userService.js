// userService.js
const userService = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: 'User 1' },
          { id: 2, name: 'User 2' },
          { id: 3, name: 'User 3' },
        ];
        resolve({ data: users });
      }, 3000);
    });
  },
};

export default userService;
