// 화살표 함수 특징
// 화살표 함수는 기존의 함수보다 표현이 간략한 것 뿐만 아니라 내부 동작 또한 간략화 되어 있다.

// 1. 화살표 함수는 this를 가지지 않는다.
const theater = {
  store: "건대점",
  titles: ["어벤져스", "겨울왕국", "스파이더맨"],
  showMovieList() {
    // 일반 함수
    this.titles.forEach(function (title) {
      console.log(this); // => 일반 함수의 this는 전역객체(global)를 가리킨다.
      console.log(`${this.store} : ${title}`);
    });

    // 화살표 함수
    this.titles.forEach((title) => console.log(`${this.store} : ${title}`));
  },
};

theater.showMovieList();

// 2. 화살표 함수는 new와 함께 호출할 수 없다.
// const arrowFunc = function () {};
const arrowFunc = () => {};
// new arrowFunc(); // TypeError: arrowFunc is not a constructor
console.log(arrowFunc.hasOwnProperty("prototype"));

// 3. 화살표함수는 super를 가지지 않는다.
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  move(lostWeight) {
    if (this.weight > lostWeight) {
      this.weight -= lostWeight;
      console.log(
        `${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량 되어 ${this.weight}kg이 되었습니다.`
      );
    }
  }
}

class Tiger extends Animal {
  move(lostWeight) {
    // 일반 함수
    // 화살표 함수
  }
}
