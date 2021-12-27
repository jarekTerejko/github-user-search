import { ContainerEl } from "../Container/ContainerEl";
import { ImageEl } from "../Image/ImageEl";
import {
  UserInnerWrapper,
  UserWrapper,
  UserColRightAvatar,
  UserColRightPartOne,
  UserColRightPartThree,
  UserColRightPartTwo,
  UserName,
  UserYear,
  UserLogin,
  UserBio,
  UserStats,
  UserStatsItem,
  UserStatsItemHeader,
  UserStatsItemData,
  UserMoreInfo,
  UserMoreInfoItem,
  UserMoreInfoLink,
} from "./UserElements";

import Location from "../../images/icon-location.svg";
import Website from "../../images/icon-website.svg";
import Twitter from "../../images/icon-twitter.svg";
import Company from "../../images/icon-company.svg";
const User = ({ data, theme, isSubmited, fetchError, isLoading }) => {
  // octocat: data

  const formatDate = () => {
    const joinedDate = new Date(data.created_at);
    const splitedDate = joinedDate.toDateString().slice(4).split(" ");
    return `Joined ${splitedDate[1]} ${splitedDate[0]} ${splitedDate[2]}`;
  };

  return (
    <>
      {data !== null ? (
        <UserWrapper>
          <ContainerEl>
            <UserInnerWrapper theme={theme}>
              <UserColRightAvatar src={data.avatar_url} />
              <UserColRightPartOne>
                <UserName>{data.name}</UserName>
                <UserYear>{formatDate()}</UserYear>
                <UserLogin>@{data.login}</UserLogin>
                <UserBio largeScreen>
                  {data.bio ? data.bio : "This profile has no bio"}
                </UserBio>
              </UserColRightPartOne>
              <UserBio smallScreen>
                {data.bio ? data.bio : "This profile has no bio"}
              </UserBio>
              <UserColRightPartTwo>
                <UserStats>
                  <UserStatsItem>
                    <UserStatsItemHeader>repos</UserStatsItemHeader>
                    <UserStatsItemData>{data.public_repos}</UserStatsItemData>
                  </UserStatsItem>
                  <UserStatsItem>
                    <UserStatsItemHeader>followers</UserStatsItemHeader>
                    <UserStatsItemData>{data.followers}</UserStatsItemData>
                  </UserStatsItem>
                  <UserStatsItem>
                    <UserStatsItemHeader>following</UserStatsItemHeader>
                    <UserStatsItemData>{data.following}</UserStatsItemData>
                  </UserStatsItem>
                </UserStats>
              </UserColRightPartTwo>
              <UserColRightPartThree>
                <UserMoreInfo>
                  <UserMoreInfoItem isAvailable={data.location}>
                    <ImageEl src={Location} alt="" />
                    {data.location ? data.location : "Not available"}
                  </UserMoreInfoItem>
                  <UserMoreInfoItem isAvailable={data.twitter_username}>
                    <ImageEl src={Twitter} alt="" />
                    {data.twitter_username ? (
                      <UserMoreInfoLink
                        href={`https://twitter.com/${data.twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >{`@${data.twitter_username}`}</UserMoreInfoLink>
                    ) : (
                      "Not available"
                    )}
                  </UserMoreInfoItem>
                  <UserMoreInfoItem isAvailable={data.blog}>
                    <ImageEl src={Website} alt="" />
                    {data.blog ? (
                      <UserMoreInfoLink
                        href={data.blog}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </UserMoreInfoLink>
                    ) : (
                      "Not available"
                    )}
                  </UserMoreInfoItem>
                  <UserMoreInfoItem isAvailable={data.company}>
                    <ImageEl src={Company} alt="" />
                    {data.company ? data.company : "Not available"}
                  </UserMoreInfoItem>
                </UserMoreInfo>
              </UserColRightPartThree>
            </UserInnerWrapper>
          </ContainerEl>
        </UserWrapper>
      ) : null}
      {isSubmited && fetchError && !isLoading && (
        <ContainerEl>
          <UserName noUser>There is no such username</UserName>
        </ContainerEl>
      )}
    </>
  );
};

export default User;
