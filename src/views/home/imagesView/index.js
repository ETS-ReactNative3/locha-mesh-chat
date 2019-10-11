import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Icon, Header, Left, Body, Title } from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 20
    };
  }
  render() {
    return (
      <Modal
        visible={this.props.open}
        transparent={true}
        onRequestClose={() => this.props.close()}
      >
        <ImageViewer
          imageUrls={this.props.images}
          renderIndicator={() => null}
          renderHeader={() => (
            <Header
              style={styles.headerContainer}
              androidStatusBarColor="black"
            >
              <Left>
                <TouchableHighlight
                  underlayColor="#eeeeee"
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 100
                  }}
                  onPress={() => {
                    this.props.close();
                  }}
                >
                  <Icon
                    style={{ color: "white" }}
                    type="MaterialIcons"
                    name="arrow-back"
                  />
                </TouchableHighlight>
              </Left>
              <Body>
                <Title>Locha Mesh</Title>
              </Body>
            </Header>
          )}
        />
        <View
          style={{
            backgroundColor: "black",
            minHeight: 50,
            alignItems: "flex-end",
            flexDirection: "row"
          }}
        >
          <TextInput
            placeholderTextColor="gray"
            multiline={true}
            style={{
              height: this.state.height,
              flex: 1,
              color: "gray",
              backgroundColor: "black"
            }}
            value={this.state.message}
            onChangeText={text => this.setState({ message: text })}
            onContentSizeChange={event => {
              this.setState({
                height: event.nativeEvent.contentSize.height
              });
            }}
            placeholder="Mensaje"
          />

          <TouchableOpacity onPress={this.send}>
            <Icon
              style={styles.iconChatStyle}
              type="MaterialIcons"
              name="send"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "black"
  },
  iconChatStyle: {
    color: "#fbc233",
    fontSize: 32,
    paddingHorizontal: 5,
    paddingBottom: 7
  }
});