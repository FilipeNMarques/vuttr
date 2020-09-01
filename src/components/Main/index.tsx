import { Wrapper, Header, Title, Description, ActionBar } from './styles'
import SearchBar from 'components/SearchBar'

const Main = () => {
  return (
    <Wrapper>
      <Header>
        <Title>VUTTR</Title>
        <Description>Very Useful Tools to Remember</Description>

        <ActionBar>
          <SearchBar />
        </ActionBar>
      </Header>
    </Wrapper>
  )
}

export default Main
