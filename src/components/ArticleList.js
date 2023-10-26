// ArticleList.js
import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Assuming that the index can serve as a unique key
          title={post.title}
          date={post.date || "January 1, 1970"}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
