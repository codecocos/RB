import React, { useCallback, useReducer, useRef } from "react";
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

//useReducer : 상태를 업데이트하는 로직을 모아서 컴포넌트 바깥에 둘 수 있는 것이 장점.
function todoReducer(todos, action) {
  switch (action.type) {
    //새로추가
    case 'INSERT':
      //{type:'INSERT',todo:{id:1,text:'todo',checked:false}}
      return todos.concat(action.todo);
    //제거
    case 'REMOVE':
      //{type:'REMOVE',id:1}
      return todos.filter(todo => todo.id !== action.id);
    //토글
    case 'TOGGLE':
      //{type:'REMOVE',id:1}
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  //원래 두 번째 파라미터에 초기 상태를 넣어주지만, 
  //undefined를 넣고, 세 번째 파라미터에 초기상태 만들어주는 함수를 넣어주어
  //맨처음 렌더링 될 때만 createBulkTodos 함수가 호출되도록 함.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

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
      dispatch({ type: 'INSERT', todo })
      //nextId 1씩 더하기
      nextId.current += 1;
    },
    []
  );

  const onRemove = useCallback(
    id => {
      dispatch({ type: 'REMOVE', id })
    },
    []
  )

  const onToggle = useCallback(
    id => {
      dispatch({ type: 'TOGGLE', id });
    }, []);

  return (
    <TodoTemplate>
      {/* TodoInsert props로 onInsert함수 전달 */}
      <TodoInsert onInsert={onInsert} />
      {/* TodoList props로 onRemove onToggle함수 전달 , state 로 todos 전달*/}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>)
}

export default App;
