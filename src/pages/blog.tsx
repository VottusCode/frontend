import React from "react";
import { blogPostsQuery } from "../gql/queries";
import { useSuspendQuery } from "../hooks/useSuspendQuery";
import { DefaultLayout } from "../layouts/DefaultLayout";
import Card from "../components/elements/Card";
import Hero from "../components/elements/Hero";
import { BlogLoader, BlogWrapper } from "../components/styled/blog";
import { CardTitle, CardSubtitle } from "../components/styled/card";

export const BlogPage = () => {
  return (
    <DefaultLayout>
      <Hero color="primary" size="normal" className="has-text-centered">
        <h1 className="is-size-1">Blog</h1>
      </Hero>
      <React.Suspense fallback={<BlogLoader />}>
        <BlogPosts />
      </React.Suspense>
    </DefaultLayout>
  );
};

/**
 * TEMP inline components
 */

/**
 * END
 */

export const BlogPosts = () => {
  const { data } = useSuspendQuery(blogPostsQuery(1));

  return (
    <div>
      {data ? (
        <div className="container is-fade-item">
          <BlogWrapper>
            <div className="columns is-multiline" style={{ width: "100%" }}>
              {[...Array(3 * 1)].map((e, key) => (
                <div className="column is-one-third" key={key}>
                  <Card
                    image={{
                      src: "https://via.placeholder.com/1280x720",
                      alt: "Post Title",
                    }}
                    isParallax={false}
                    link="https://vott.us/smth"
                  >
                    <CardTitle>Post Title</CardTitle>
                    <CardSubtitle>Short text</CardSubtitle>
                  </Card>
                </div>
              ))}
            </div>
          </BlogWrapper>
        </div>
      ) : (
        <BlogLoader />
      )}
    </div>
  );
};

export default BlogPage;
