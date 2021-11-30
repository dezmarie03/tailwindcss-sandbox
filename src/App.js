import Navbar from './components/Navbar';

const navbarItems = [
  {
    text: "Insurance",
    url: "/insurance",
  },
  {
    text: "About Us",
    url: "/about",
  },
  {
    text: "Claims Service",
    url: "/claims",
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
