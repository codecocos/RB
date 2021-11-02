import React, { useCallback, useState, useRef } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  //파라미터를 함수를 함수 형태로 넣어주면 컴포넌트가 처음 렌더링될 때만 실행됨.
  //만약 (createBulkTodos()) 작성하면 리렌더링 될 때마다 createBulkTodos 함수가 호출 됨.
  const [todos, setTodos] = useState(createBulkTodos);

  //고윳값으로 사용될 id(렌더링 될 정보가 아님.)
  //ref를 사용하영 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      //nextId 1씩 더하기
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      //setTodos(todos.filter(todo => todo.id !== id));
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    //빈 배열
    []
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo),
      );
    },
    [],
  );

  return (
    <TodoTemplate>
      {/* TodoInsert props로 onInsert함수 전달 */}
      <TodoInsert onInsert={onInsert} />
      {/* TodoList props로 onRemove onToggle함수 전달 , state 로 todos 전달*/}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>)
}

export default App;

// //useState 함수형 업데이트
// const [number, setNumber] = useState(0);
// //prevNumbers는 현재 number값을 가리킵니다.
// const onIncrease = useCallback(
//   //어떻게 업데이트할지 정의해 주는 업데이트함수
//   () => setNumber(prevNumber => prevNumber + 1),
//   [],
// );
