// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/react";

const _schema = i.schema({
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed(),
      url: i.string(),
    }),
    $users: i.entity({
      email: i.string().unique().indexed().optional(),
      imageURL: i.string().optional(),
      type: i.string().optional(),
    }),
    activityFeed: i.entity({
      createdAt: i.number(),
      emoji: i.string().optional(),
      text: i.string().optional(),
      type: i.string(),
    }),
    comments: i.entity({
      createdAt: i.number(),
      text: i.string(),
    }),
    images: i.entity({
      createdAt: i.number(),
      description: i.string().optional(),
      unsplashId: i.string().unique().indexed(),
      url: i.string(),
    }),
    reactions: i.entity({
      createdAt: i.number(),
      emoji: i.string(),
    }),
    users: i.entity({
      color: i.string().optional(),
      createdAt: i.number(),
      name: i.string(),
    }),
  },
  links: {
    $usersLinkedPrimaryUser: {
      forward: {
        on: "$users",
        has: "one",
        label: "linkedPrimaryUser",
        onDelete: "cascade",
      },
      reverse: {
        on: "$users",
        has: "many",
        label: "linkedGuestUsers",
      },
    },
    activityFeedImage: {
      forward: {
        on: "activityFeed",
        has: "one",
        label: "image",
        onDelete: "cascade",
      },
      reverse: {
        on: "images",
        has: "many",
        label: "feedItems",
      },
    },
    commentsImage: {
      forward: {
        on: "comments",
        has: "one",
        label: "image",
        onDelete: "cascade",
      },
      reverse: {
        on: "images",
        has: "many",
        label: "comments",
      },
    },
    commentsUser: {
      forward: {
        on: "comments",
        has: "one",
        label: "user",
        onDelete: "cascade",
      },
      reverse: {
        on: "users",
        has: "many",
        label: "comments",
      },
    },
    reactionsImage: {
      forward: {
        on: "reactions",
        has: "one",
        label: "image",
        onDelete: "cascade",
      },
      reverse: {
        on: "images",
        has: "many",
        label: "reactions",
      },
    },
    reactionsUser: {
      forward: {
        on: "reactions",
        has: "one",
        label: "user",
        onDelete: "cascade",
      },
      reverse: {
        on: "users",
        has: "many",
        label: "reactions",
      },
    },
  },
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
