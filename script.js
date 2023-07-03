function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // 驗證帳號密碼
    if (username == "user" && password == "0000") {
      document.getElementById("message").textContent = "登入成功";
      // 防止表單提交(上網找)
      return false; 
    } else {
      document.getElementById("message").textContent = "帳號或密碼錯誤，請重新輸入";
      // 防止表單提交(上網找)
      return false; 
    }
}