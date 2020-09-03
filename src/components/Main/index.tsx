import { Wrapper, Header, Title, Description, ActionBar } from './styles'
import { FiSearch } from 'react-icons/fi'
import Input from 'components/Input'

const Main = () => {
  return (
    <Wrapper>
      <Header>
        <Title>VUTTR</Title>
        <Description>Very Useful Tools to Remember</Description>

        <ActionBar>
          <Input
            name="searchInput"
            icon={FiSearch}
            placeholder="Digite o que está procurando"
            type="text"
          />
        </ActionBar>
      </Header>
    </Wrapper>
  )
}

export default Main
