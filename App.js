import Main from "./src/main";
import FindPosition from "./src/components/findPosition";
import AddPosition from "./src/components/addPosition";
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import PositionState from "./src/context/position/positionState";
export default function App() {
  return (
    <PositionState>
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/findPosition" element={<FindPosition/>} />
        <Route path="/addPosition" element={<AddPosition/>} />
      </Routes>
    </NativeRouter>
    </PositionState>
  );
}


