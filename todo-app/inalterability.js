// const array = [1, 2, 3, 4, 5];

// //배열을 복사하는 것이 아니라 똑같은 배열을 가리킴(참조)
// const nextArrayBad = array;

// console.log('nextArrayBad[0] 바꾸기 전 :', nextArrayBad);

// nextArrayBad[0] = 100;

// console.log('nextArrayBad[0] 바꾼 후 :', nextArrayBad);

// //완전히 똑같은 배열이기 때문에 true : 참조했으니까!
// console.log('전후 비교 :', array === nextArrayBad);

/*-------------------------------------------------------------------------------------*/

// const array = [1, 2, 3, 4, 5];

// //배열 내부의 값을 모두 복사함.
// const nextArrayGood = [...array];

// console.log(nextArrayGood);

// console.log('nextArrayGood[0] 바꾸기 전 :', nextArrayGood);

// nextArrayGood[0] = 100;

// console.log('nextArrayGood[0] 바꾼 후 :', nextArrayGood);

// //다른 배열이기 때문에 false
// console.log('전후 비교 :', array === nextArrayGood);

/*-------------------------------------------------------------------------------------*/

const object = {
  foo: 'bar',
  value: 1
};

//객체가 복사되지 않고, 똑같은 객체를 가리킴
const nextObjectBad = object;

console.log('nextObjectBad 변화 전 :', nextObjectBad);

nextObjectBad.value = nextObjectBad.value + 1;

console.log('nextObjectBad 변화 후 :', nextObjectBad);

//같은 객체이기 때문에 true
console.log('전후 비교 :', object === nextObjectBad);

/*-------------------------------------------------------------------------------------*/

const nextObjectGood = {
  //기존에 있던 내용을 모두 복사해서 넣음.
  ...object,
  //새로운 값을 덮어씀
  value: object.value + 1
}

//다른 객체이기 때문에 false
console.log(object === nextObjectGood);