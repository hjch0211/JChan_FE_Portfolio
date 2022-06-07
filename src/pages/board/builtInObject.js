import React from "react";

function BuiltInObject() {
    //빌트인객체
    // eslint-disable-next-line
    const numObj = new Number(1.5);

    //원시값 래퍼객체
    const num = 10;

    //전역객체
    //eval을 사용해서 에디터를 이용한 콘솔창을 만들 수 있을 듯?
    const [code, setCode] = React.useState("");
    const [returnCode, setReturnCode] = React.useState("");
    const onChange = (e) => {
        setCode(String(e.target.value));
    };
    const returnEvalCode = () => {
        // eslint-disable-next-line
        const _return = eval(code);
        return _return;
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setReturnCode(returnEvalCode());
    };

    return (
        <>
            <p>
                <div>If const numObj = new Number(1.5)</div>
                <div>numObj's prototype is {String(Object.getPrototypeOf(numObj))}(Number)</div>
                <div>numObj.toFixed is {numObj.toFixed()}</div>
                <div>Number.isInteger(0.5) is {String(Number.isInteger(0.5))}</div>
            </p>
            <p>
                <div>If num = 10</div>
                <div>num.isProperty = 10, {num.name}래퍼객체가 생성됨</div>
            </p>
            <p>
                <div>This is a mini Console</div>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={code} />
                </form>
                <div>{returnCode}</div>
            </p>
        </>
    );
}

export default BuiltInObject;
