import React, { useState, useEffect } from 'react';
import { ContentWrapper, ArticleWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import { Button } from '../../atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = 'ec1bff6ec82b8e7d7d708a07171b16';
// process.env.REACT_APP_DATOCMS_TOKEN

export const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
          {
            allArticles{
              id
              title
              category
              content
              image{
                url
              }
            }
          }
       `,
        },
        {
          headers: {
            Authorization: `Baerer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => {
        setError(`Sorry, we couldn't load articles`);
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed </NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig="true">Read more...</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};
