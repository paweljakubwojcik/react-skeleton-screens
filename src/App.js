import styled from 'styled-components'
import Articles from './components/Aticles'
import User from './components/User'

const Header = styled.header`
background-color: #1e65ff;
padding: 10px;
> h1 {
  color: white;
  max-width: 1200px;
  margin: 0 auto;
}
`
const Content = styled.div`
width:100%;
max-width:1200px;
margin: 0 auto;
padding: 20px;
display: grid;
grid-template-columns: 2fr 1fr;
gap:100px;
`


function App() {
  return (
    <div className="App">
      <Header>
        <h1>React Skeletons</h1>
      </Header>
      <Content>
        <Articles />
        <User />

      </Content>
    </div>
  );
}

export default App;
