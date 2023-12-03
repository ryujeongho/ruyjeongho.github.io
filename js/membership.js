const frm = document.signupFrm;
const id = frm.id;
const password = frm.password;
const email = frm.email;
const address = frm.address;

document.querySelector("#password-check").onblur = isEqualPwd;
const pwdCheck = document.getElementById("password-check");

document.signupFrm.onsubmit = () => {

    // 아이디 유효성검사
    if(!/^[A-Za-z0-9]{8,12}$/.test(id.value)) {
        alert('유효한 아이디를 작성해주세요...🥺');
        return false;
    }

    // 비밀번호 유효성검사
    const regexps = [/^.{8,12}$/, /[a-z]/i, /[0-9]/, /[!@#$%^&*()]+/];

    // - 문자 8~12자리
    if(!regexps[0].test(password.value)){
        alert('비밀번호는 8~12자리여야 합니다.');
        return;
    }
    // - 영문자 포함
    if(!regexps[1].test(password.value)){
        alert('비밀번호는 영문자를 하나이상 포함해야 합니다.');
        return;
    }
    // - 숫자 포함
    if(!regexps[2].test(password.value)){
        alert('비밀번호는 숫자를 하나이상 포함해야 합니다.');
        return;
    }
    // - 특수문자(!@#$%^&*())포함
    if(!regexps[3].test(password.value)){
        alert('비밀번호는 특수문자(!@#$%^&*())를 하나이상 포함해야 합니다.');
        return;
    }

    if (!isEqualPwd()) {
        return false;
    }

    if(!/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/.test(email.value)) {
        alert("이메일 형식에 어긋납니다.");
        return false;
    }

    // saveSignup();
    
    alert("회원가입 완료!!");
    

    window.location.href = "index.html";
};


function isEqualPwd() {
    if (password.value === pwdCheck.value) {
      return true;
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      password.select();
      return false;
    }
};

const saveSignup = () => {
    const members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(new Member(id.value, password.value, email.value, address.value));
    console.log(members);

    localStorage.setItem('members', JSON.stringify(members));

    frm.reset();
};

class Member {
    constructor(id, password, email, address, createdAt = Date.now()) {
        this.id = id;
        this.password = password;
        this.email = email;
        this.address = address;
        this.createdAt = createdAt;
    }
}

