import "./App.css";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Articles from "./Pages/Articles";
import Articles_Comments from "./Pages/Articles_Comments";
import Users from "./Pages/Users";
import Topics from "./Pages/Topics";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>NC Nyeuz</h1>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/api" element={<Main />} />
        <Route path="/articles" element={<Articles />} />
        <Route
          path="api/articles/:article_id/comments"
          element={<Articles_Comments />}
        />
        <Route path="/articles/:topics" element={<Topics />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
