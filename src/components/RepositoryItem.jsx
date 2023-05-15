import { Text, View } from "react-native"

const RepositoryItem = ({
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount
}) => {
  return(
    <View>
      <Text>Full name:{`${fullName}`}</Text>
      <Text>description:{`${description}`}</Text>
      <Text>language:{`${language}`}</Text>
      <Text>Forks: {`${forksCount}`}</Text>
      <Text>Stars:{`${stargazersCount}`}</Text>
      <Text>rating:{`${ratingAverage}`}</Text>
      <Text>Reviews:{`${reviewCount}`}</Text>
    </View>
  )
}

export default RepositoryItem
