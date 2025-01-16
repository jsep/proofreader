import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="mx-auto p-8 max-w-4xl dark:text-[#f6f6f6] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Tauri + React</h1>

      <div className="flex justify-center items-center gap-8 mb-8">
        <a href="https://vitejs.dev" target="_blank" className="hover:scale-110 transition-transform dark:hover:text-[#24c8db]">
          <img src="/vite.svg" className="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank" className="hover:scale-110 transition-transform dark:hover:text-[#24c8db]">
          <img src="/tauri.svg" className="h-16 w-16" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" className="hover:scale-110 transition-transform dark:hover:text-[#24c8db]">
          <img src={reactLogo} className="h-16 w-16" alt="React logo" />
        </a>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="flex flex-col items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f0f0f98] dark:text-white dark:border-gray-600"
        />
        <button 
          type="submit" 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors dark:bg-[#0f0f0f98] dark:hover:bg-[#0f0f0f69]"
        >
          Greet
        </button>
      </form>
      <p className="mt-4 text-center text-lg">{greetMsg}</p>
    </main>
  );
}

export default App;
