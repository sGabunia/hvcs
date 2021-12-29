import React from 'react';
import {StyleSheet, TextInput, Platform} from 'react-native';
import {Controller} from 'react-hook-form';

import MyAppText from '../utils/text/MyAppText';

import {useTheme} from '@react-navigation/native';

interface Props {
  name: string;
  placeholder: string;
  rules: {
    required: string;
    minLength: {value: number; message: string};
    pattern?: {value: RegExp; message: string};
    validate?: (value: any) => true | 'Password do not match';
  };
  control: any;
  reffer?: any;
  passwordShown?: boolean;
}

const CustomInput = ({
  name,
  placeholder,
  rules,
  control,
  reffer,
  passwordShown,
}: Props) => {
  const {colors} = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <>
          <TextInput
            style={{
              ...styles.input,
              color: colors.text,
              borderColor: error ? 'red' : colors.text,
            }}
            keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'default'}
            secureTextEntry={passwordShown}
            placeholder={placeholder}
            placeholderTextColor={colors.text}
            value={value}
            onChangeText={onChange}
            ref={reffer}
          />
          {error && (
            <MyAppText style={styles.error}>
              {error.message || 'Error'}
            </MyAppText>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  error: {
    color: '#000',
    fontSize: 13,
    fontWeight: '700',
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    marginVertical: 7,
  },
});
