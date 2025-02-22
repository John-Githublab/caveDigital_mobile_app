class ConfigAPIUrl {
  // static baseUrl = "http://3.7.69.101:4000/api";
  static baseUrl = "https://cavedigitalaustrallia-server.onrender.com/api";

  static login = this.baseUrl + "/auth/login"; //post
  static register = this.baseUrl + "/auth/signup"; //post
  static islogin = this.baseUrl + "/islogin"; //get
  static tasks = this.baseUrl + "/tasks";
  static triggerMail = this.baseUrl + "/trigger/email";
}

export default ConfigAPIUrl;
