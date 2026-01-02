import { db } from "./db";
import { id } from "@instantdb/react";

function App() {
  const { data, isLoading } = db.useQuery({
    activityFeed: {},
  });

  if (isLoading) return <p>Connecting...</p>;

  const addPost = async () => {
    await db.transact([
      db.tx.activityFeed[id()].update({
        createdAt: Date.now(),
        type: "post",
        text: "Hello InstantDB 🚀",
        emoji: "🔥",
      }),
    ]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>InstantDB Connected ✅</h1>

      <button onClick={addPost}>
        Add Feed Item
      </button>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default App;
