import Card from "./components/Card";
import Login from "./pages/Login";
import "./styles.css";

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

  return (
  <div className="App">
{/*    
      <div>
      <div>Hello World</div>
      <div> Hello world</div>
      </div> */}
{/*   
    <Card />
    <Card /> */}
    <Login />

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
