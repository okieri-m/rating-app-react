import './App.css';
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Form } from "./components/Form";

function App() {
  return (
    <main className="main">
      <article className='wrapper'>
        <Header />
        <Body />
        <Form />
      </article>
    </main>
  );
}

export default App;
