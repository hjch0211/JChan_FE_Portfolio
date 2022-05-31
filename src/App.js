import { Route, Routes } from "react-router-dom";

//Common Components
import Header from "./components/container/Header";
import Footer from "./components/container/Footer";

//Pages -> 나중에 자동으로 페이지 추가하게끔 만들어보자
import Home from "./pages/Home";
import Board from "./pages/board/Board";
import Test from "./pages/board/Test";
import Prototype from "./pages/board/prototype";
import StrictMode from "./pages/board/strictMode";
import Error from "./pages/Error";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="board" element={<Board />}>
                    <Route path="test" element={<Test />} />
                    <Route path="prototype" element={<Prototype />} />
                    <Route path="strictMode" element={<StrictMode />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
