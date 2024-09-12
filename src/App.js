import { useEffect, useState } from "react";
import Card from "./components/Card";
import Login from "./pages/Login";
import "./styles.css";
import ThemeButton from "./components/ThemeButton";

function App() {
  // console.log("App.js");

  // const name= "김완재";
  // const age= 33;

  // const greetingMessage = `안녕하세요. ${name}님! 나이가 ${age}세입니까? 환영합니다!`
  
  // console.log("greetingMessage:", greetingMessage);
  

  // //Admin 코드가 있는 사람만 로그인 접근 가능하도록 하는것 //
  // const user = {
  //   isLoggedIn: false,
  //   role: "admin"  // 'guest', 'user' 도 있다
  // };
  // //로그인 한 상태이면서 동시에 admin 권한을 가진 유저
  // if (!user.isLoggedIn && user.role === "admin") {
  //   console.log("관리자 페이지에 접근이 가능합니다.");
  // } else {
  //   console.log("관리자 페이지에 접근이 불가능합니다!");
  // }

  // const userInput = ''

  // if(!userInput) {
  //   // 사용자의 입력값이 없는 경우
  //   console.log("사용자의 입력값이 없는 경우")
  // }

  // // userInput = e.target.value
const [messagees, setMessages] = useState([{
  id: 1,
  text: "첫번째 메세지"
},
]);


  const user = {
    isLoggedIn: true,
    role: "admin", //'guest','user'
  };

  /* 사용자가 로그인 한 상태이면서, 역할이 'admin'인 경우에
  "관리자 페이지 접근 가능"이라고 출력하기. 아니라면
  "관리자 페이지 접근 불가능" 이라고 출력하기 */

  if (user.isLoggedIn && user.role === "admin") {
    console.log("관리자 페이지 접근 가능")
  } else {
    console.log("관리자 페이지 접근 불가능")
  }

  const user2 = {
  id: "wanjae01",
  password: "password",
  isLoggedIn: false,
  };
  
  if(user2.id === "wanjae01" && user2.password === "password") {
    //1차 조건 판별
    user2.isLoggedIn = true;
  }

  const [title, setTitle] = useState("초기타이틀");

  const handleClick = () => {
    window.location.href = "https://www.naver.com/";
  };

  // 다크모드 변경 논리
  /**
   * 1. ThemeButton에 온클릭 이벤트를 만든다
   * 2. 버튼이 눌러졌다는 이벤트를 부모 컴포넌트에 전송한다. (onTheme)
   * 3. 부모 컴포넌트가 이벤트를 받으면 div 클래스를 변환하는 함수를 생성한다. (handleTheme)
   * 4. [state] isDarkMode 라는 state를 생성한다.
   * 5. isDarkMode state를 wrap 클래스가 있는 div에 className에 속성으로 넣어준다
   * 5-1. 다크모드인 경우엔 'dark-mode'라는 클래스를 준다.
   * 5-2. 다크모드가 아닌 경우엔 'light-mode'라는 클래스를 준다.
   * 6. handleTheme함수에서 isDarkMode의 값을 토글로 변경해준다.
   * 
   * 7. ThemeButton 컴포넌트에 isDarkMode라는 props를 내려준다.
   * 7-1. 이 props에는 isDarkMode의 값을 넣어준다.
   * 8. ThemeButton 컴포넌트에 isDarkMode의 값을 받아서 true인 경우엔 '다크모드' false인 경우엔 '라이트모드' 라는 텍스트를 UI에 보여준다.
   * 
   * 9. 버튼을 클릭한다.
   * 10. 작동이 잘 되는지 바뀌는걸 확인한다.
   */

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    alert(isDarkMode ? "다크 모드" : "라이트 모드")
  }, [isDarkMode]);

  return (
  <div className={`wrap ${isDarkMode ? "dark-mode" : "light-mode"}`}>
 
    <Card title={title}
          subText="라해스개부캠"
          onCardButtonClick={handleClick}
        />
    <Card />
    {/* <Login /> */}
    {/* {ThemeButton 컴포넌트} */}
    <ThemeButton isDarkMode={isDarkMode} onTheme={handleTheme}/>

  {/* 삼항연산자 */}
  {isLoggedIn ? <h2>환영합니다~!</h2> : <h2>로그인 해주세요</h2>}
    </div>
  );
}


export default App;

// default parameter
// 함수 정의
// const add = (a, b) => {
//  console.log("a", a);
//  console.log("b", b);
//  return a + b;
// }

// console.log("add", add(1));

const add = (a = 0, b = 0) => {
  console.log("a", a);
  console.log("b", b);
  return a + b;
};
console.log("add", add(1));

// 함수 정의
const greeting = (input = "고객") => {
  return `${input}님, 반갑습니다!`; //백틱으로 해야한다. 따옴표 아님
};

// 함수 실행
console.log("김완재", greeting());

// 구조분해할당

let studentList = ['김김김', '이이이'];
let [firstStudent, secondStudent, third = "박박박"] = studentList;
console.log("~first Student", firstStudent)
console.log("~second Student", secondStudent);
console.log("~third", third);

const addStudent = () => {
  const addStudentList = [...studentList, "최최최22"]
  console.log("addstudentlist", addStudentList);
  console.log("studentlist", studentList);
};

addStudent();

// 객체 구조분해할당

let person = {
  name: "김완재",
  age: 33,
  email: "wanjae@gmail.com",
};

const {name, age, email} = person;
console.log("~name:", name);
console.log("~name:", age);
console.log("~name:", email);

const messageItem = {
  messageId: 1,
  message: "안녕하세요",
}

const copyPerson = {
  ...person,
  ...messageItem,
  name: "완두콩", //값 수정하기
  nickName: "킹왕짱", //값 추가하기
};
console.log("~copyPerson", copyPerson);

