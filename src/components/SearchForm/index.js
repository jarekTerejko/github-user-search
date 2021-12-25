import SearchIcon from "../../images/icon-search.svg";
import { ContainerEl } from "../Container/ContainerEl";
import {
  SearchFormEl,
  SearchFormWrapper,
  SearchFormInput,
  SearchFormBtn,
  SearchFormImg,
  SearchFormErrorMsg,
} from "./SearchFormElements";

const SearchForm = ({
  handleSubmit,
  searchTerm,
  handleInputChange,
  isSubmited,
  fetchError,
  isLoading,
  data,
  theme,
}) => {
  return (
    <SearchFormWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ContainerEl>
        <SearchFormEl onSubmit={handleSubmit} theme={theme}>
          <SearchFormInput
            type="text"
            value={searchTerm}
            onChange={(e) => handleInputChange(e)}
            name="github-search"
            placeholder="Search GitHub username..."
          />
          <SearchFormBtn>Search</SearchFormBtn>
          <SearchFormImg src={SearchIcon} alt="search-icon" />
          {isSubmited && !searchTerm && !fetchError && !isLoading && !data && (
            <SearchFormErrorMsg>
              This field cannot be left blank
            </SearchFormErrorMsg>
          )}
        </SearchFormEl>
      </ContainerEl>
    </SearchFormWrapper>
  );
};

export default SearchForm;
