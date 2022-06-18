import React from "react";

function This() {
    const foo = function () {
        return this;
    };
    const obj = { foo };

    return (
        <>
            <p>
                This 바인딩은 함수 호출 방식에 따라 동적으로 결정된다
                <div>foo() : {String(foo())}</div>
                <div>obj.foo() : {String(obj.foo())}(obj)</div>
                <div>new foo() : {String(new foo())}(foo)</div>
            </p>
            <p>
                메서드 내 콜백함수의 this를 제대로 참조하기 위해서
                <div>.bind(this)를 사용하거나</div>
                <div>화살표함수에서 this를 사용하면 됨</div>
            </p>
            <p>
                메서드란 프로퍼티에 바인딩된 함수로
                <div>메서드 자체는 객체와 독립적</div>
                <div>따라서 메서드 내 this는 호출한 객체에 바인딩</div>
            </p>
            <p>
                Function.prototype 메서드의
                <div>apply, call, bind</div>
            </p>
        </>
    );
}

export default This;
