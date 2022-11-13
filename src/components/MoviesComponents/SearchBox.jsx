import { BoxHTML, TitleSearchHTML, Icon, Input } from './SearchBox.styled';

export const SearchBox = ({ query, onChange }) => {
  return (
    <BoxHTML>
      <TitleSearchHTML> Search field </TitleSearchHTML>
      <Icon />
      <Input
        type="text"
        value={query}
        onChange={e => onChange(e.target.value)}
      />
    </BoxHTML>
  );
};
