import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { Wrapper } from './Root.styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from '../providers/UsersProvider';
import Cropper from '../components/organisms/Cropper/Cropper';
import TeachersList from '../components/organisms/TeachersList/TeachersList';

const Root = () => {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/add-user" element={<AddUser />}></Route>
                <Route path="/cropper" element={<Cropper />}></Route>
                <Route path="/get-teachers" element={<TeachersList />}></Route>
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
