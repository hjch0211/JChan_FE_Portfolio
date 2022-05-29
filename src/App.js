import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Board from "./pages/board/Board";
import Test from "./pages/board/Test";
import Error from "./pages/Error";

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="board" element={<Board />}>
                    <Route path="test" element={<Test />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
