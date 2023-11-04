import { Post, PostType } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Igor Montezuma",
      avatarUrl: "https://avatars.githubusercontent.com/u/85948415?v=4",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-10-28 20:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Fred",
      avatarUrl: "https://avatars.githubusercontent.com/u/85948415?v=4",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-10-29 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
