import { useState } from "react";
import { db } from "../../db";
import { id } from "@instantdb/react";

export default function CommentBox({ imageId }) {
  const [text, setText] = useState("");

const addComment = async () => {
  if (!text.trim()) return;

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  const commentId = id();

  await db.transact([
    db.tx.comments[commentId].update({
      text,
      createdAt: Date.now(),
      image: imageId,      // link to image
      user: user.id,       // 🔥 link to user (THIS WAS MISSING)
    }),

    db.tx.images[imageId].update({
      lastInteractionAt: Date.now(),
    }),
  ]);

  setText("");
};


  return (
    <div style={{ marginTop: 8 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        style={{ width: "100%", padding: 6 }}
      />
      <button onClick={addComment} style={{ marginTop: 4 }}>
        Add Comment
      </button>
    </div>
  );
}
