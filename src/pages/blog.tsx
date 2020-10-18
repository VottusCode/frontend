import React from "react";
import { blogPostsQuery } from "../gql/queries";
import { useSuspendQuery } from "../hooks/useSuspendQuery";
import { DefaultLayout } from "../layouts/DefaultLayout";
import Card from "../components/elements/Card";
import Hero from "../components/elements/Hero";
import { BlogLoader, BlogWrapper } from "../components/styled/blog";
import { CardTitle, CardSubtitle } from "../components/styled/card";
import styled from "styled-components";

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

export const NoPostsTextWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export const BlogPosts = () => {
  const { data } = useSuspendQuery(blogPostsQuery(1));

  return (
    <div>
      {data ? (
        <div className="container is-fade-item">
          {data.posts.length > 1 ? (
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
          ) : (
            <NoPostsTextWrapper>
              <h1 className="is-size-2">There are no posts available.</h1>
            </NoPostsTextWrapper>
          )}
        </div>
      ) : (
        <BlogLoader />
      )}
    </div>
  );
};

export default BlogPage;
