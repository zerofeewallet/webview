import React,{Component} from 'react';
import {
  Image,
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Linking,
  StatusBar, StyleSheet,
  ScrollView, ActivityIndicator, BackHandler, ToastAndroid,
} from "react-native";
import WebView from "react-native-webview";
import Video from "react-native-video";

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true,webViewRef:React.createRef()};
    //this.webViewRef = React.createRef();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  hideSpinner() {
    this.setState({ visible: false });
  }
  handleBackButton = () => {
    //console.log(this.state.webViewRef.current,"Ref")
    if (Platform.OS === "ios") return;

    const handleBack = () => {
      if (!this.state.webViewRef.current) return false;
      this.state.webViewRef.current.goBack();
      return true;
    };
    const handleEvent = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack
    );
    return () => handleEvent.remove();
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View flex={1} style={{marginTop:0,backgroundColor: '#D0E1F1',marginBottom:0}} >
        <StatusBar hidden = {false} backgroundColor="#D0E1F1" translucent = {true}/>
        {/*<WebView onLoad={() => this.hideSpinner()}
                 source={{ uri: "https://app.zeroswallet.com/" }} />*/}

        <View flex={1}  style={{marginTop:40,backgroundColor: '#D0E1F1',marginBottom:43}}>
          <WebView
                  startInLoadingState
                   onLoad={() =>
                         this.hideSpinner()
                   }
                   source={{ uri: "https://app.zeroswallet.com/" }}
                   scalesPageToFit={false}
                   scrollEnabled={false}
                  domStorageEnabled={true}
                  originWhitelist={["https://*"]}
                   setBuiltInZoomControls={false}
                   javaScriptEnabled={true}
                   allowsBackForwardNavigationGestures
                   ref={this.state.webViewRef}
                   onPress={this.handleBackButton}
                   cacheEnabled={true}
                   />
        </View>

        {this.state.visible ==true?
          <>
            <Image style={{height:"100%",width:"100%",marginTop:-100}}
                   source={require("../images/reload.png")} />
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator style={{marginTop:-350}} size="large" />
            </View>
          </>
          :""
        }

      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

var styless = StyleSheet.create({
  backgroundVideo: {
    height:"100%",
    width:"100%",
    position: "relative",
  },
});

export default FirstPage;
