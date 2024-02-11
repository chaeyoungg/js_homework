const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const idField = document.querySelector('#userEmail');
const pwField = document.querySelector('#userPassword');
const submit = document.querySelector('.btn-login');


function handleCheckId(){ //아이디 입력값이 유효한지 검사하는 함수
  // console.log(this.value);
  if(emailReg(this.value)){ //정규화 검사 emailReg가 true일때 
    console.log('success');
    idField.classList.remove('is--invalid'); //idField는 this로 대체 가능
  }
  else {
    console.log('error');
    idField.classList.add('is--invalid');
  }
}

function handleCheckpw() { //비밀번호 입력값이 유효한지 검사하는 함수
  // console.log(this.value);
  if(pwReg(this.value)){ //정규화 검사 pwReg가 true일때 
    console.log('pw success');
    pwField.classList.remove('is--invalid'); //pwField는 this로 대체 가능

  }
  else {
    console.log('pw error');
    pwField.classList.add('is--invalid');
  }
}


idField.addEventListener('input', handleCheckId); 
pwField.addEventListener('input', handleCheckpw);



function handleSubmit(e) { //서버와의 통신을 하는 함수에는 try-catch 문을 이용하자.
  e.preventDefault();//비밀번호, 아이디의 유효성 여부도 상태변수로 관리해주는 것이 좋다! 
  if((idField.value == user.id) && (pwField.value == user.pw)) //user.id도 서버의 통신을 통해 받게 되므로, 변수로 관리하는 것이 좋다. 
    window.location.href = "./welcome.html"; //클릭 시 이동하도록 설정
  else alert('아이디와 비밀번호를 다시 확인해주세요.');
}

submit.addEventListener('click', handleSubmit);




/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/














