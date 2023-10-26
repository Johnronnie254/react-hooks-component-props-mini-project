import React from "react";

function ArticleList() {
  const posts = [
    {
      title: "Blog Post",
      date: "January 1, 1970",
      content: "This is my preview"
    }
  ];

  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Assuming that the index can serve as a unique key
          title={post.title}
          date={post.date}
          content={post.content}
        />
      ))}
    </main>
  );
}

function Article({ title, date, content }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{content}</p>
    </article>
  );
}

export default ArticleList;
