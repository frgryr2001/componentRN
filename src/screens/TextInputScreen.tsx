import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {useThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    isSubscribed: false,
  });

  const {
    theme: {colors},
  } = useThemeContext();

  return (
    <SafeAreaView
      style={{
        marginHorizontal: 20,
      }}>
      <KeyboardAvoidingView behavior="height">
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <HeaderTitle title="TextInputs" />
              <TextInput
                style={{
                  ...stylesScreen.input,
                  borderColor: colors.text,
                  color: colors.text,
                }}
                placeholder="Name"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={value => onChange(value, 'name')}
                value={form.name}
                placeholderTextColor={colors.text}
              />

              <TextInput
                style={{
                  ...stylesScreen.input,
                  borderColor: colors.text,
                  color: colors.text,
                }}
                placeholderTextColor={colors.text}
                autoCorrect={false}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={value => onChange(value, 'email')}
                value={form.email}
                keyboardAppearance="dark"
              />
              <View style={stylesScreen.switchRow}>
                <Text style={stylesScreen.switchText}> Subscribed </Text>
                <CustomSwitch
                  isOn
                  onChange={(value: any) => onChange(value, 'isSubscribed')}
                />
              </View>

              <HeaderTitle title={JSON.stringify(form, null, 3)} />
              <HeaderTitle title={JSON.stringify(form, null, 3)} />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const stylesScreen = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10,
  },
  switchText: {fontSize: 25},
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical: 10,
  },
});
