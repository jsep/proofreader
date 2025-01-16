function App() {

  return (
    <main className="mx-auto p-8 pt-4 max-w-4xl dark:text-[#f6f6f6] min-h-screen">
        <div className={"flex flex-row items-center justify-between"}>
                <button className={"border border-b-white flex-1 p-2"}>𝕏 post</button>
                <button className={"border border-b-white flex-1 p-2"}>Slack message</button>
                <button className={"border border-b-white flex-1 p-2"}>Standup</button>
        </div>
        <div className={"flex mt-4"}>
            <textarea className={"w-full text-black bg-gray-100 p-1"} rows={8}></textarea>
        </div>
        <div className={"flex mt-4"}>
            <button className={"border border-b-white flex-1 p-2"}>Proofread</button>
        </div>
    </main>
  );
}

export default App;
