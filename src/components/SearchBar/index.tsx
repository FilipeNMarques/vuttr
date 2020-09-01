import { Wrapper } from './styles'

type Props = {
  children?: string
}

const SearchBar = ({ children }: Props) => {
  return (
    <Wrapper>
      <input type="text" name={children} id="searchBar" />
    </Wrapper>
  )
}

export default SearchBar
