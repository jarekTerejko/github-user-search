import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import User from "./components/User";

function App() {
  const octocat = {
    login: "octocat",
    id: 583231,
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    public_gists: 8,
    followers: 4288,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
    updated_at: "2021-12-14T04:39:03Z",
  };

  const [data, setData] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorValue, setFetchErrorValue] = useState("");
  const [fetchError, setFetchError] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    setIsSubmited(true);

    if (searchTerm !== "") {
      getData(`https://api.github.com/users/${searchTerm}`);
      clearInput();
    } else {
      setData(null);
      setFetchError(false);
    }

    e.preventDefault();
  };

  const clearInput = () => {
    setSearchTerm("");
  };
  const handleInputChange = (e) => {
    if (isSubmited) {
      setIsSubmited(false);
    }
    if (fetchError) {
      setFetchError(false);
    }
    setSearchTerm(e.target.value);
  };

  const getData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        setData(null);
        throw Error("Could not fetch data for that resource");
      }
      const data = await response.json();
      setData(data);
      setFetchError(false);
      setFetchErrorValue("");
    } catch (error) {
      console.error(error);
      setFetchError(true);
      setFetchErrorValue(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData("https://api.github.com/users/octocat");
    // return () => {
    //   cleanup
    // }
  }, []);

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.body.className = nextTheme;
  };

  return (
    <>
      <Navbar changeTheme={changeTheme} theme={theme} />
      <SearchForm
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        setSearchTerm={setSearchTerm}
        isSubmited={isSubmited}
        fetchError={fetchError}
        isLoading={isLoading}
        data={data}
        theme={theme}
      />
      <User
        octocat={octocat}
        data={data}
        theme={theme}
        isSubmited={isSubmited}
        fetchError={fetchError}
        isLoading={isLoading}
        searchTerm={searchTerm}
        fetchErrorValue={fetchErrorValue}
      />
    </>
  );
}

export default App;
