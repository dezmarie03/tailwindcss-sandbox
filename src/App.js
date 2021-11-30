import Navbar from './components/Navbar';

const navbarItems = [
  {
    text: "Insurance",
    url: "#",
  },
  {
    text: "About Us",
    url: "#",
  },
  {
    text: "Claims Service",
    url: "#",
  }
];

function App() {
  return (
    <div className="App">
      <Navbar items={navbarItems} />
      <main>
        <h1>Tailwind CSS Sandbox</h1>
      </main>
    </div>
  );
}

export default App;
