import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

import {useSelector} from 'react-redux';

import MyAppText from '../utils/text/MyAppText';

import colors from '../utils/colors/colors';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

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
  const isDark = useSelector(selectMode);
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
              borderColor: error ? 'red' : colors.dark,
            }}
            secureTextEntry={passwordShown}
            placeholder={placeholder}
            placeholderTextColor={isDark ? colors.light : colors.dark}
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
