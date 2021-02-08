import { makeRequest } from './shared'

const userService = {
  createUser: user => makeRequest('/users', 'POST', user),
  updateUser: updates => makeRequest('/users/me', 'PATCH', updates),
  getProfile: () => makeRequest('/users/me', 'GET'),
  logIn: user => makeRequest('/users/login', 'POST', user),
  logOut: () => makeRequest('/users/logout', 'POST'),
  logOutAll: () => makeRequest('users/logoutAll', 'POST'),
}

export default userService
