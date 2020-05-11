
/**
 * https://github.com/react-native-community/react-native-side-menu
 */

import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

export default function SideMenuContent({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        {/* <Image
            style={styles.avatar}
            source={{ uri }}
          /> */}
        <Text style={styles.name}>Your name</Text>
      </View>

      <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        About
      </Text>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Contacts
      </Text>

      <Text
        onPress={() => Actions.home()}
        style={styles.item}
      >
        action home
      </Text>

    </ScrollView>
  );
};

SideMenuContent.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  name: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item: {
    color: 'green',
  }
});