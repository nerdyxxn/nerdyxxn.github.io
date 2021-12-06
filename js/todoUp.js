const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".guardListCont");

let toDos = [];

const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage에 저장하기
}


function deleteToDo(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();

    // 클릭한 li의 id를 가지고 있는 toDo 삭제
    // 그러나 li.id는 String, toDo.id는 number이다. parsrInt로 변환
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // [toDo의 id와] [li의 id가] 다른 객체만 다시 toDo 배열에 저장, 즉 서로의 id가 같으면 제외 

    //배열에 지운 뒤 localStorage에 다시 저장해 줘야지 업데이트된다.
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("div");
    li.id = newToDo.id; // id태그에 newToDo.id의 값을 id 속성 추가

    const span = document.createElement("span");
    
    span.innerText = newToDo.text;
    
    const button = document.createElement("button");
    button.innerHTML = "<i class='fas fa-minus-circle'>";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // array에 push
    paintToDo(newTodoObj); // 객체로 넘겨주기
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    // 앱 시작과 동시에 localStorage에 무언가 저장되어 있다면 문자열을 배열로 바꿔주고 -> toDos 배열에 저장(복원) -> 배열 내 있는 item(toDo)를 paintToDo함수로 보내서 화면단에 표시

    const parsedToDos = JSON.parse(savedTodos); // 배열처럼 보이는 문자열을 진짜 배열로 만들어준다
    toDos = parsedToDos; // 기존에 가지고 있는 toDos 배열을 복원 -> 덮어쓰기 문제 해결
    parsedToDos.forEach(paintToDo); // 반복문을 통해서 나오는 item을 paintToDo를 호출해서 화면상에 보여주면 된다.
}