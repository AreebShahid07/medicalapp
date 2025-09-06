import Home from "./pages/homepage";

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl p-4 m-4">Medical-App</h1>
      <Home/>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Get Started</button>
    </div>
  );
}

export default App;
