import React from 'react';
import { Grid,Container } from 'semantic-ui-react'
import './App.css';
import ServerList from './components/ServerList'

const App = () => (
  <Container>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
            <ServerList/>
        </Grid.Column>
        <Grid.Column width={13}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default App;
