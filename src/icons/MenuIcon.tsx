import React from 'react';

type Props = {
  width: number;
}

const styles = {
  span: {
    padding: "0 0 0 4px",
    display: "inline-block"
  }
}
const ArrowIcon = ({width}: Props) => {
  return (
    <span style={styles.span}>
    <svg width={width} height={width} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Icon-Set-Filled" transform="translate(-206.000000, -1089.000000)" fill="#000000">
        <path d="M230.536,1101.88 L222.879,1109.54 C222.639,1109.78 222.311,1109.85 222,1109.79 C221.689,1109.85 221.361,1109.78 221.122,1109.54 L213.464,1101.88 C213.074,1101.49 213.074,1100.86 213.464,1100.46 C213.855,1100.07 214.488,1100.07 214.879,1100.46 L222,1107.59 L229.121,1100.46 C229.512,1100.07 230.145,1100.07 230.536,1100.46 C230.926,1100.86 230.926,1101.49 230.536,1101.88 L230.536,1101.88 Z M222,1089 C213.164,1089 206,1096.16 206,1105 C206,1113.84 213.164,1121 222,1121 C230.837,1121 238,1113.84 238,1105 C238,1096.16 230.837,1089 222,1089 L222,1089 Z" id="chevron-down-circle">
        </path>
      </g>
      </g>
    </svg>
    </span>
  )
}

export default ArrowIcon;