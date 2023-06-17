import { Image, StyleSheet, Text, View, Button } from "react-native"

const styles = StyleSheet.create({
  repositoryItem: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20
  },
  top:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  bottom:{
    flexDirection: "row",
    justifyContent: "space-between"
  },

  repoUser:{
    flexGrow: 0
  },
  repoName: {
    flexGrow: 1
  },
  programmingLang:{
    padding: 2,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
    width: 130,
  },
  image: {
    height:80,
    backgroundColor: "#e1e4e8",
    marginLeft: 100
  },
  text:{
    fontWeight: "800"
  }
})

function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

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
    <View style={styles.repositoryItem}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={{uri:'https://avatars3.githubusercontent.com/u/13142323?v=4'}}
        />
        <View style={styles.repoName}>
          <Text style={styles.text}>{`${fullName}`}</Text>
          <Text>{`${description}`}</Text>
          <View style={styles.programmingLang}> 
            <Button title={`${language}`} color={"white"}/>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
          <View>
            <Text style={styles.text}>{`${kFormatter(forksCount)}`}</Text>
            <Text>Forks</Text>
          </View>
          <View>
            <Text style={styles.text}>{`${kFormatter(stargazersCount)}`}</Text>
            <Text>Stars</Text>
          </View>
          <View>
            <Text style={styles.text}>{`${kFormatter(ratingAverage)}`}</Text>
            <Text>rating</Text>
          </View>
          <View>
            <Text style={styles.text}>{`${kFormatter(reviewCount)}`}</Text>
            <Text>Reviews</Text>
          </View>
      </View>
    </View>
  )
}

export default RepositoryItem
