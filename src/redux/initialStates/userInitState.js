const userInitialState = {
  token: '',
  loading: false,
  message: '',
  error: '',
  profile: {},
  login: {
    loading: false,
    user: {},
    message: '',
    error: ''
  },
  confirm: {
    loading: false,
    message: '',
    error: ''
  },
  signup: {
    loading: false,
    // user: {},
    message: '',
    error: ''
  },
  logout: {
    loading: false,
    message: '',
    error: ''
  },
  getUser: {
    loading: false,
    message: '',
    error: ''
  },
};
export default userInitialState;
