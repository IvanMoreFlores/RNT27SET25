import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function IconCategory(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a4 4 0 100 8 4 4 0 000-8zM3 17a4 4 0 118 0 4 4 0 01-8 0zm10-3a1 1 0 011-1h6a1 1 0 011 1v5a2 2 0 01-2 2h-4a2 2 0 01-2-2v-5zM3 4a1 1 0 011-1h6a1 1 0 011 1v5a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
        fill={props.fill ?? '#FFFFFF'}
      />
    </Svg>
  );
}

export default IconCategory;
