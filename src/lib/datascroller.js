import { db } from "./firebase";

export default {
  /**
   * this function will be fired when you first time run the app,
   * and it will fetch first 5 posts, here I retrieve them in descending order, until the last added post appears first.
   */
  postsFirstBatch: async function () {
    try {
      const data = await db
        .collection("songs")
        .orderBy("createdAt", "desc")
        .limit(5)
        .get();

      let posts = [];
      let lastKey = "";
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          postContent: doc.data().postContent,
        });
        lastKey = doc.data().createdAt;
      });

      return { posts, lastKey };
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * this function will be fired each time the user click on 'More Posts' button,
   * it receive key of last post in previous batch, then fetch next 5 posts
   * starting after last fetched post.
   */
  postsNextBatch: async (key) => {
    try {
      const data = await db
        .collection("songs")
        .orderBy("createdAt", "desc")
        .startAfter(key)
        .limit(5)
        .get();

      let posts = [];
      let lastKey = "";
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          postContent: doc.data().postContent,
        });
        lastKey = doc.data().createdAt;
      });
      return { posts, lastKey };
    } catch (e) {
      console.log(e);
    }
  },
};
