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
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1 },
    },
  };
  return (
    <SearchFormWrapper
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ContainerEl>
        <SearchFormEl onSubmit={handleSubmit} theme={theme}>
          <SearchFormInput
            type="text"
            value={searchTerm}
            onChange={(e) => handleInputChange(e)}
            name="github-search"
            placeholder="Search GitHub username..."
          />
          <SearchFormBtn whileTap={{ scale: 0.8 }}>Search</SearchFormBtn>
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
