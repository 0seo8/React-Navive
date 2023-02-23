# React-native로 Todo 만들기

## expo 어플리케이션 생성

```shell
$ expo init WorkHardTravelHardApp
$ typscript선택
$ yarn start
```

## Components

### 1. [TouchableOpacity](!https://reactnative.dev/docs/touchableopacity)

- View의 한종류 이지만, click이벤트를 listen할 준비가 된 View입니다.
- 클릭할 때 투명해지는 애니메이션 효과가 들어있습니다.
- `activeOpacity`를 통해 투명도를 조절할 수 있습니다.

### 2. [TouchableHighlight](!https://reactnative.dev/docs/touchablehighlight)

- TouchableOpacity보다 더 많은 속성이 있습니다.
- 필수 속성 : onPress={이벤트}, underlayColor="색상"
- `activeOpacity`를 통해 투명도를 조절할 수 있습니다.

### 3. [TouchableWithoutFeedback](!https://reactnative.dev/docs/touchablewithoutfeedback)

- 화면의 가장 위에서 일어나는 탭이벤트를 listen. but 그래픽이나 다른 UI반응을 보여주지는 않습니다.

### 4. [Pressable](!https://reactnative.dev/docs/pressable)

- TouchableWithoutFeedback과 비슷하지만 조금 더 색다릅니다. 가장 최신에 나온 컴포넌트로 onPress, onPressIn, onPressOut, onLongPress 등 TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback 가 가지고 있던 속성을 가지고 있으면서도 delayLongPress, disabled 등 다른 속성을 추가적으로 가지고 있습니다.
- hitSlope속성을 통해 바깥 어디까지 탭을 누르는 것을 감지할 것인지를 설정할 수도 있습니다.

### 5. [TextInput](!https://reactnative.dev/docs/textinput)

- react-native에서 user가 text를 입력할 수 있는 유일한 방법입니다.
- `keyboardType` 속성을 이용해 키보드 패드를 설정할 수도 있습니다.
- `returnKeyType` 속성을 이용해 ruturn을 커스텀 할 수도 있습니다.
- `secureTextEntry` 속성을 이용해 password입력시 \*\*\*로 처리 될 수 있도록 할 수 있습니다.
- `multiline`의 경우 한줄 이상 작성하는 경우 사용할 수 있습니다.
- `placeholderTextColor`를 이용해 글자의 색상을 변경할 수도 있습니다.
- `onChangeText`를 통해 input value를 알아낼 수 있습니다.
- `onSubmitEditing`를 통해 submit 이벤트를 적용시킬 수 있습니다.

## [expo의 AsyncStorage module](!https://docs.expo.dev/versions/latest/sdk/async-storage/)

### 1. 설치

```shell
$ npx expo install @react-native-async-storage/async-storage
```

### 2. Storing data

- async, await를 항상 붙여서 사용해야합니다.
- 객체의 경우 string으로 변환해줘야합니다.

```js
import AsyncStorage from "@react-native-async-storage/async-storage";

//Storing string value
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_Key", value);
  } catch (e) {
    // saving error
  }
};

//Storing object value
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};
```

### 3. 사용

Reading string value

```js
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
```

Reading object value

```js
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
```

## [Alert Api](!https://reactnative.dev/docs/alert)

alret창의 title과 message를 지정할 수 있습니다. alret의 경우 Andorid와 ios모두 작동하지만 prompt의 경우 ios에서만 작동이 가능합니다.

또한 버튼을 사용을 할 수도 있으며, onPress함수를 통해 동작을 전달할 수도 있습니다.

```js
const deleteTodo = async (key: string) => {
  Alert.alert("Delete To Do", "Are you sure", [
    { text: "Cancel" },
    {
      text: "I'm sure",
      onPress: () => {
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        saveTodos(newToDos);
      },
    },
  ]);
  return;
};
```

![](https://velog.velcdn.com/images/0seo8/post/a6e64ae8-c469-43f5-8ebf-f10bc84d6c4e/image.png)

ios의 경우 버튼 alertButtonStyle을 통해 스타일도 지정을 할 수 있습니다.
