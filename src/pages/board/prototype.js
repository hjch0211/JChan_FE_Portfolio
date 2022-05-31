import React from "react";

function Prototype() {
    //Style
    const style = { display: "flex", alignItems: "center" };

    //생성자 함수 선언전 접근
    const prePrototype = Circle.prototype;

    //메서드 공유
    function Circle(radius) {
        this.radius = radius;
    }
    //메서드 정의 시, 화살표 함수 주의
    Circle.prototype.getHeight = function () {
        return this.radius * 2;
    };
    const _test = [new Circle(5), new Circle(15), new Circle(30)];

    //__proto__
    const obj = {};

    //인스턴스 프로퍼티
    _test[0].getHeight = function () {
        return this.radius * 3;
    };

    //직접 상속
    const testObject = Object.create(Object.prototype, {
        x: { value: 1, writable: true, enumerable: true, configurable: true },
    });
    const testObject2 = { y: 20, __proto__: testObject };

    //정적 메서드/프로퍼티
    Circle.staticX = 10;

    //for in
    function getProperty(obj) {
        let _return = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                //이것보다 Object.key/value/entries 사용 권장
                _return = [..._return, `${key} : ${obj[key]}`];
            }
        }
        return _return.map((i) => `${i} / `);
    }
    return (
        <div>
            <div style={style}>
                This is a Circle instance
                {_test.map((circle) => (
                    <span
                        style={{
                            width: circle.getHeight(),
                            height: circle.getHeight(),
                            borderRadius: "50%",
                            backgroundColor: "green",
                            display: "inline-block",
                            margin: "10px",
                        }}
                    ></span>
                ))}
            </div>
            <p>
                <div style={style}>
                    This is a __proto__ :<div>{String(obj.hasOwnProperty("__proto__"))}</div>
                </div>
                <div style={style}>
                    This is a recommended solution :
                    <div>&nbsp;{String(Object.getPrototypeOf(obj))}</div>
                </div>
                <div style={style}>
                    constructor of instance is
                    <div>&nbsp;{String(_test[0].constructor).slice(9, 23)}</div>
                </div>
                <div style={style}>
                    constructor of Object literal is
                    <div>&nbsp;{String(obj.constructor).slice(9, 17)}(가상 생성자 함수)</div>
                </div>
            </p>
            <p>
                <div>Prototype simultaneously created with {String(prePrototype)}(constructor)</div>
                <div>
                    Prototype of Prototype is {String(_test[0].__proto__.__proto__)}
                    (Object.prototype)
                </div>
                <div>
                    Prototype of Object.prototype is&nbsp;
                    {String(_test[0].__proto__.__proto__.__proto__)}
                </div>
                <div>getHeight of instance is {_test[0].getHeight()}(constructor x)</div>
            </p>
            <p>
                <div>testObject.x made by Object.create is {testObject.x}</div>
                <div>testObject2.y made by __proto__ is {testObject2.y}</div>
            </p>
            <p>
                <div>This is a Static property : {Circle.staticX}</div>
                <div>There are _test[0]'s property : {getProperty(_test[0])}</div>
            </p>
        </div>
    );
}

export default Prototype;
