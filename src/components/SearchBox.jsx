import { Wrapper, TitleSearch, Icon, Input } from './SearchBox.styled';

export const SearchBox = ({ onChange }) => {
  return (
    <Wrapper>
      <TitleSearch>Search field </TitleSearch>
      <Icon />
      <Input type="text" onChange={e => onChange(e.target.value)} />
    </Wrapper>
  );
};
