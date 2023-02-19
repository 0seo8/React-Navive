# REACT NATIVE

## [ScrollView](!https://reactnative.dev/docs/scrollview)

- `View`에서는 위아래로 스크롤을 할 수가 없습니다. 이 때 react-native에서는 ScrollView Component를 사용할 수 있습니다.
- 안드로이드, ios 체계에 맞춰 스크롤 이벤트가 발생하게 됩니다.
- `horizontal`라는 props를 넣게 되면 가로형으로 볼 수 있습니다. 단, ScrollView는 Container Style props를 사용해야 style을 입력할 수 있습니다.
- `pagingEnabled`를 사용하면 스크롤을 페이지 단위로 할 수 있도록 도와줄 수 있습니다.
- `showsHorizontalScrollIndicator`을 사용하면 아래 스크롤 바를 숨기거나 보여줄 수 있습니다.
- `indicatorStyle`의 경우 ios에서만 작동하는 기능으로 scroll indiactor의 색상을 바꿀 수 있습니다.

```js
<ScrollView horizontal contentContainerStyle={styles.weather}>
  <View style={styles.day}>
    <Text style={styles.temp}>27</Text>
    <Text style={styles.description}>Sunny</Text>
  </View>
  <View style={styles.day}>
    <Text style={styles.temp}>27</Text>
    <Text style={styles.description}>Sunny</Text>
  </View>
</ScrollView>
```

## [Dimensions API](!https://reactnative.dev/docs/dimensions)

```js
const { width: SCREEN_SIZE } = Dimensions.get("window");

console.log(SCREEN_SIZE);
```

## [expo-location](!https://docs.expo.dev/versions/latest/sdk/location/)
