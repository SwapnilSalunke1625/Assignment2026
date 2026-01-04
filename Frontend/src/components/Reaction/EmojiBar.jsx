import { db } from "../../db.js";
import { id } from "@instantdb/react";

const EMOJIS = ["❤️", "🔥", "😂"];

const groupReactions = (reactions = []) => {
  const map = {};
  reactions.forEach((r) => {
    map[r.emoji] = (map[r.emoji] || 0) + 1;
  });
  return map;
};

export default function EmojiBar({ imageId, reactions }) {
  const counts = groupReactions(reactions);

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔍 find current user's reaction (if any)
  const myReaction = reactions?.find(
    (r) => r.user?.id === user?.id
  );

  const toggleReaction = async (emoji) => {
    if (!user) return;

    // 1️⃣ If user already reacted
    if (myReaction) {
      // same emoji → UNDO
      if (myReaction.emoji === emoji) {
        await db.transact([
          db.tx.reactions[myReaction.id].delete(),
        ]);
      } 
      // different emoji → UPDATE
      else {
        await db.transact([
          db.tx.reactions[myReaction.id].update({
            emoji,
            createdAt: Date.now(),
          }),
        ]);
      }
    }
    // 2️⃣ No reaction yet → CREATE
    else {
      await db.transact([
        db.tx.reactions[id()].update({
          emoji,
          createdAt: Date.now(),
          image: imageId,
          user: user.id,
        }),
      ]);
    }
  };

  return (
    <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
      {EMOJIS.map((emoji) => (
        <button
          key={emoji}
          onClick={() => toggleReaction(emoji)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            border: "1px solid #ddd",
            borderRadius: 16,
            padding: "4px 10px",
            cursor: "pointer",
            background:
              myReaction?.emoji === emoji ? "#eee" : "#fff",
          }}
        >
          <span style={{ fontSize: 16 }}>{emoji}</span>
          {counts[emoji] && (
            <span style={{ fontSize: 13, fontWeight: 600 }}>
              {counts[emoji]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
