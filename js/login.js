const users=[
    {user:'nimal',password:'123',avatar:'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1668659531~exp=1668660131~hmac=95cdf66c66d778135198a12adbae9137e6beec59be922388cf24b89f607174c9'},
    {user:'kamal',password:'123',avatar:'https://img.freepik.com/premium-psd/3d-illustration-smiling-man-cartoon-close-up-portrait-standing-bearded-man-orange-background-3d-avatar-ui-ux_1020-5089.jpg?w=740'}
];
const login=()=> {
    let userName = $('#userName').val();
    let password = $('#password').val();
    if (userName.trim().length!== 0 || password.trim().length!== 0) {
        for (const tempUser of users) {
            if (tempUser.user === userName) {
                if (tempUser.password === password) {
                        localStorage.setItem('user',JSON.stringify({name:userName,avatar:tempUser.avatar}));
                        window.location.href='pages/dashboard.html';
                        return;
                } else {
                    alert(' password is incorrect');
                    return;
                }
            }
    }
    alert('Username is incorrect!');
  }else{
    alert('username or password is required!');
  }
}