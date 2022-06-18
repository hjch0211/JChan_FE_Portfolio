import { Route, Routes } from "react-router-dom";

//Common Components
import Header from "./components/container/Header";
import Footer from "./components/container/Footer";

//Pages -> 나중에 자동으로 페이지 추가하게끔 만들어보자
import Home from "./pages/Home";
import Board from "./pages/board/Board";
import Prototype from "./pages/board/prototype";
import StrictMode from "./pages/board/strictMode";
import BuiltInObject from "./pages/board/builtInObject";
import This from "./pages/board/This";
import Error from "./pages/Error";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="board" element={<Board />}>
                    <Route path="prototype" element={<Prototype />} />
                    <Route path="strictMode" element={<StrictMode />} />
                    <Route path="builtInObject" element={<BuiltInObject />} />
                    <Route path="this" element={<This />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
