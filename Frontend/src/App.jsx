import { db } from "./store/instancedb";

function App() {
  const { data, isLoading } = db.useQuery({
    posts: {},
  });

  if (isLoading) return <p>Connecting...</p>;

  return (
    <div>
      <h1>InstantDB Connected ✅</h1>

      <button
      className="bg-black text-white p-3"
        onClick={() => {
    console.log("BUTTON CLICKED");
    db.transact(
      db.tx.posts.create({
        title: "Hello InstantDB 🚀",
        content: "My first post stored in InstantDB",
        createdAt: Date.now(),
      })
    );
  }}
        
         
      >
        Add First Post
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
