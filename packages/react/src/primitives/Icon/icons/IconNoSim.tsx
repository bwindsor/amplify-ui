import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconNoSim = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.26 21.21L3.79 3.74L2.38 5.15L5.12 7.89L5 8.01V19C5 20.1 5.9 21 7 21H17C17.35 21 17.68 20.9 17.97 20.74L19.85 22.62L21.26 21.21V21.21ZM7 19V9.77L16.23 19H7ZM10.84 5H17V14.11L19 16.11V5C19 3.9 18.1 3 17 3H10.01L7.95 5.06L9.36 6.47L10.84 5Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
