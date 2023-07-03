document.getElementById('error').style.display = 'none'
function OK() {
    var acc = document.getElementById('Acc').value
    console.log(acc)
    var pwd = document.getElementById('PWD').value
    //第一種方法
    // if (acc === '' || pwd === '') {
    //     document.getElementById('error').innerHTML = '重新輸入'
    //     document.getElementById('error').style.display = ''
    //     return;
    // }
    // else if (acc !== 'user' && pwd != '0000') {
    //     document.getElementById('error').innerHTML = '錯誤'
    //     document.getElementById('error').style.display = ''
    // }
    // else {
    //     window.location.href = 'test.html';
    // }
    //第二種方法 利用form submit防呆
    if(acc === 'user' && pwd ==='0000')
    {
        window.location.href = 'test.html';
    }
    else
    {
        document.getElementById('error').textContent = '錯誤'
        document.getElementById('error').style.display = ''
    }
}
