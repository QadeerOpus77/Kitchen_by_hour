const endPoints = {
    // auth
    LOGIN: 'auth/login',
    SIGN_UP: 'auth/sign-up',
    FORGOT_PASSWORD: 'auth/send-otp',
    VALIDATE_PASSWORD_CODE: 'auth/verify-otp',
    RESET_PASSWORD: 'auth/new-password',
    CHANGE_PASSWORD: 'auth/change-password',
  };
  
  export default Object.freeze(endPoints);