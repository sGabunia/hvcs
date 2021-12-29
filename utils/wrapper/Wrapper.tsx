import React from 'react';
import {View} from 'react-native';

import {Props} from '../../type';

const Wrapper: React.FC<Props> = ({children}) => {
  return <View style={{flex: 1}}>{children}</View>;
};

export default Wrapper;
