import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import api from './services';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Chat from './views/Chat';

import { TMessage } from './interfaces';

import GlobalStyle, { Wrapper } from './AppStyle';

const App: React.FC<any> = () => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  const addMessage = async (newMessage: TMessage): Promise<any> => {
    try {
      const message: TMessage = await api.post('/message', newMessage);
      setMessages(prevState => {
        return [message, ...prevState];
      });
    } catch (error) {
      alert(error);
    }
  };

  const getMessage = useCallback(async (): Promise<any> => {
    try {
      const messages: TMessage[] | [] = await api.get('/message');

      setMessages(messages);
    } catch (error) {
      alert(error);
    }
  }, [setMessages]);

  useEffect(() => {
    getMessage();
    return () => {};
  }, [getMessage]);

  return (
    <Router>
      <Wrapper>
        <GlobalStyle key="global-style" />
        <Header />

        <Switch>
          <Route path="/" exact>
            <Main>
              <Chat messages={messages} onAddMessage={addMessage} />
            </Main>
          </Route>
          <Redirect to="/" />
        </Switch>

        <Footer>
          <a href="https://github.com/BipRaider/RStestBE-">Git BeckEnd</a>
          <a href="https://github.com/BipRaider/RStestFE">Git FrondEnd</a>
        </Footer>
      </Wrapper>
    </Router>
  );
};

export default App;
