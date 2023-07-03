function login_test() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "0000") {
      alert("登入成功");
      return true;
    } else {
      alert("帳號或密碼有誤!請重新登入!");
      return false;
    }
  }