import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainMenu from '@components/mainMenu/MainMenu';
import AudioHistory from '@components/audioHistory/AudioHistory';
import NewAudio from '@components/newAudio/NewAudio';
import NavBar from '@components/navBar/NavBar';

import { StyledContainer } from './StyledContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <StyledContainer className="container">
        <Routes>
          <Route path='/' element={<MainMenu />} exact />
          <Route path='/new-audio' element={<NewAudio />} />
          <Route path='/audio-history' element={<AudioHistory />} />
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
}
export default App;