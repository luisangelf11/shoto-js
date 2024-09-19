export default class MyPassword {
  constructor() {}

  static generatePassword(length: number = 8) {
    let password = "";
    if(length < 8) throw new Error(`The password need 8 or more characters 😿`)
    const characters = [
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
      ..."abcdefghijklmnopqrstuvwxyz", 
      ..."0123456789",
      ..."!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~", 
    ];
    while (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(password)) {
      password = "";
      for (let i = 1; i <= length; i++) {
        const indexRandom = Math.floor(Math.random() * characters.length);
        password += characters[indexRandom];
      }
    }
    return password;
  }

  static validatePasswordSecurity(password: string) {
    let pointsSecure = 0;
    let status = "";
    //validate security
    if (password.length >= 8) pointsSecure++; //validate length
    if (/(?=.*\d)/.test(password)) pointsSecure++; //validate nums
    if (/(?=.*[a-z])/.test(password)) pointsSecure++; //validate chars lowercase
    if (/(?=.*[A-Z])/.test(password)) pointsSecure++; //validate chars uppercase
    if (/(?=.*[\W_])/.test(password)) pointsSecure++; //validate chars symbols
    //Assigne status security
    switch (pointsSecure) {
      case 5:
        status = SECURITY.VERY_SAFE;
        break;
      case 4:
        status = SECURITY.SAFE;
        break;
      case 3:
        status = SECURITY.SAFE;
        break;
      default:
        status = SECURITY.UNSAFE;
    }
    return status;
  }
}

enum SECURITY {
  UNSAFE = "UNSAFE",
  SAFE = "SAFE",
  VERY_SAFE = "VERY_SAFE",
}
