import React, { Component } from "react";
import Modal from "react-native-modal";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import {
  Button,
  Text,
  Header,
  Left,
  Body,
  Title,
  Icon,
  Right,
  Radio
} from "native-base";
import i18n from "../../i18n";

/**
 *
 *
 * @export
 * @class EditName
 * @description component to edit the username
 * @extends {Component}
 */
export default class Lenguajes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  saveName = () => {
    this.props.editName(
      { name: this.state.name, uid: this.props.config.uid },
      () => {
        this.props.close("viewQR");
      }
    );
  };

  async onChangeLang(lang) {
    i18n.changeLanguage(lang);
    try {
      await AsyncStorage.setItem("@APP:languageCode", lang);
    } catch (error) {
      console.log(` Hi Errorrrr : ${error}`);
    }

    this.props.close("language");
  }

  render() {
    const { open, close, screenProps } = this.props;
    const disabled = this.state.name.length > 1 ? false : true;

    language = i18n.language.substr(0, 2);

    const languajes = [
      {
        key: "en",
        label: screenProps.t("Languajes:english")
      },

      { key: "es", label: screenProps.t("Languajes:spanish") }
    ];

    return (
      <View>
        <Modal
          style={{
            margin: 0
          }}
          avoidKeyboard={true}
          isVisible={open}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          onBackdropPress={() => close("language")}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: "100%"
            }}
          >
            <Header
              androidStatusBarColor="#af7d00"
              style={{ backgroundColor: "#FAB300" }}
            >
              <Left>
                <TouchableHighlight
                  underlayColor="#eeeeee"
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 100
                  }}
                  onPress={() => close("language")}
                >
                  <Icon style={styles.iconStyle} name="arrow-back" />
                </TouchableHighlight>
              </Left>
              <Body>
                <Title>Lenguajes</Title>
              </Body>
              <Right></Right>
            </Header>
            <View style={{ flex: 1 }}>
              {languajes.map(languajes => {
                return (
                  <View
                    key={languajes.key}
                    style={{
                      flexDirection: "row",
                      borderWidth: 0.2,
                      margin: 10,
                      height: "10%",
                      alignItems: "center",
                      borderRadius: 7,
                      justifyContent: "space-between"
                    }}
                  >
                    <View style={{ marginHorizontal: 10 }}>
                      <Text> {languajes.label} </Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                      <Radio
                        selected={language === languajes.key ? true : false}
                        onPress={() => this.onChangeLang(languajes.key)}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  styleTextButton: {
    paddingHorizontal: 10
  },
  qrCodeContainer: {
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: 20
  },

  buttonContainer: {
    padding: 20,
    flexDirection: "row",

    justifyContent: "flex-end"
  },
  titleModal: {
    padding: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "400"
  },
  iconStyle: {
    fontSize: 24,
    color: "white"
  }
});