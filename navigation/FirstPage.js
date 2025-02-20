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
  StatusBar,StyleSheet,
  ScrollView, ActivityIndicator,
} from "react-native";
import WebView from "react-native-webview";
import loadingVideo from "../images/loading.mp4"
import Video from "react-native-video";

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }
//https://stackoverflow.com/questions/45256826/react-native-webview-loading-indicatorhttps://stackoverflow.com/questions/45256826/react-native-webview-loading-indicator

  render() {
    return (
      <View flex={1} style={{marginTop:0,backgroundColor: '#D0E1F1',marginBottom:0}} >
        <StatusBar hidden = {false} backgroundColor="#D0E1F1" translucent = {true}/>

        {/*<WebView onLoad={() => this.hideSpinner()}
                 source={{ uri: "https://app.zeroswallet.com/" }} />*/}
        <WebView onLoad={() => this.hideSpinner()}
                 source={{ uri: "https://app.zeroswallet.com/" }} />

        {this.state.visible && (
          <Video
            // Can be a URL or a local file.
            source={loadingVideo}
            repeat={true}
            style={styles.backgroundVideo}
          />
        )}



      </View>
    );
  }
};

var styles = StyleSheet.create({
  backgroundVideo: {
    height:"100%",
    width:"100%"
  },
});

export default FirstPage;
