import React from 'react';
import ButtonItem from '../ButtonItem';

const ButtonGroup = ({children}) => {
  let isFirst = true;

  return (
    <div style={{
        marginLeft: 8, marginRight: 8,
        boxShadow: '1px 1px 4px 1px rgba(210, 206, 206, 0.75)',
        borderRadius: 10,
      }}>
      {React.Children.map(children, (child) => {
        if (child.type === ButtonItem) {
          if (isFirst) {
            isFirst = false;  
            return child;
          } else {
            return (
              <>
                <div style={{borderTopWidth: 0.3, borderTopColor:'#efeded', borderTopStyle: 'solid'}}/>
                {child}
              </>
            );
          }
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ButtonGroup;
