import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, Keyboard, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Window } from './Utils';
import { IData } from './IData';
import Card from './Card';

export default class CardGroup extends React.Component<IData> {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      modalVisible: false,
      newCardTitle: '',
    }
  }

  //#region Methods
  showAddCardModal(visible) {
    this.setState({ modalVisible: visible });
  }

  addCard(title) {

  }
  //#endregion

  //#region View Methods
  viewAddCard() {
    return (
      <Modal 
        isVisible={this.state.modalVisible}
        onBackdropPress={() => this.showAddCardModal(false)}
        onBackButtonPress={() => this.showAddCardModal(false)}
        onSwipe={() => this.showAddCardModal(false)}
        swipeDirection='left'>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeadline}>Add a card..</Text>
          </View>
          <View style={styles.modalContainer}>
            <TextInput
              autoFocus={true}
              multiline={true}
              style={styles.modalTextInput}
              placeholder="Enter a title for this card"
              onChangeText={(text) => input = text}
            />
            <Button 
              title='ADD'
              color='green'
              onPress={() => this.addCard('')} 
            />
          </View>
          
        </View>
      </Modal>
    );
  }

  //#endregion

  componentDidUpdate(prevProps, prevState, snapshot) {
   
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() { 
    return (
      <View style={styles.pageContainer}>
        <View style={styles.group}>
          <View style={styles.groupHeader}>
            <Text style={{padding: 5, fontSize: 20, fontWeight: "bold"}}>{this.state.data.label}</Text>
          </View>
          <View style={styles.groupContainer}>
            <View style={{height: 50, justifyContent: "center"}}>
              <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                <Text style={{color: '#95A4AE', fontSize: 16}}>+ Add a card</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.viewAddCard()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // justifyContent:"center",
  },
  group: {
    backgroundColor:'#DFE3E6',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: '8.5%',
    paddingRight: '8.5%',
  },
  groupHeader: {
    height: 60,
    fontWeight: 'bold',
    justifyContent: "center",
  },
  groupContainer: {
    width: '100%',
    justifyContent: "center"
  },
  modal: {
    backgroundColor:'#DFE3E6',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  modalHeader: {
    height: 60,
    fontWeight: 'bold',
    justifyContent: "center",
    // backgroundColor: 'steelblue',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  modalHeadline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
  },
  modalContainer: {
    width: '100%',
    justifyContent: "center"
  },
  modalButtonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalTextInput: {
    textAlignVertical: 'top', 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150, 
    backgroundColor: 'white', 
    padding: 10, 
    fontSize: 18
  },
  modalButton: {
    backgroundColor: 'green',
    width: '50%',
    height: 40
  }
});