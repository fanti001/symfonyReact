import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ContentWrapper, ArticleWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './TeachersList.styles';
import { Button } from '../../atoms/Button/Button';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/api/users')
      .then((res) => setTeachers(res.data))
      .catch((error) => {
        setError(`Sorry, we couldn't load users`);
      })
      .finally(() => {
        /* always executed}*/
      });
  }, []);
  //   console.log(users);
  return (
    <Wrapper>
      <NewsSectionHeader>Teachers list </NewsSectionHeader>
      {teachers.length > 0 ? (
        teachers.map(({ id, name, description, imageURL = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{name}</h3>
            </TitleWrapper>
            <ContentWrapper>
              <p>{description}</p>
              {imageURL ? <img src={imageURL} alt="article" /> : null}
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

export default TeachersList;
