import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import chatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={HomePage} exact />
      <Route path={"/chats"} component={chatPage} />
    </div>
  );
}

export default App;
