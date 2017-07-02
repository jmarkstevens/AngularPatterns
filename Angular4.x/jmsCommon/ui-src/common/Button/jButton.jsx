function getStyle(btnProp) {
    let buttonSty = Object.assign({}, standardBtnSty);
    let btnStyle = 'Btn30';
    let isDesktop = btnProp.isDesktop ? btnProp.isDesktop : true;
    if (btnProp.btn.style) btnStyle = btnProp.btn.style;
    if (btnProp.btn.backimg && !btnProp.btn.style) btnStyle = 'BackImg';
    if (btnProp.btn.icon && !btnProp.btn.style) btnStyle = 'BtnIcon';
    if (isDesktop) {
      switch (btnStyle) {
          break;
        case 'BackImg': {
          buttonSty = Object.assign({}, standardBtnIcon);
          buttonSty.background = btnProp.btn.backimg;
          break;
        }
        case 'BtnIcon': buttonSty = standardBtnIcon; break;
      }
    } else {
      switch (btnStyle) {
          break;
        case 'BtnIcon': buttonSty = standardBtnIcon; break;
      }
    }
    if (btnProp.btn.reStyle) buttonSty = btnProp.btn.reStyle;
    if (btnProp.btn.assignStyle) buttonSty = Object.assign(buttonSty, btnProp.btn.assignStyle);
    return buttonSty;
}

const JButton = (props) => {
  const clickHandler = () => { if (props.parentClickHandler) props.parentClickHandler(props.btn.buttonid); };
  let buttonSty = getStyle(props);
  let isDisabled = props.isDisabled ? props.isDisabled : false;
  let renderIt;
  if (props.btn.icon) {
    renderIt = (
      <button id={props.btn.buttonid} className="HighZ" style={buttonSty} onClick={clickHandler}>
        <i className={props.btn.icon} />
      </button>
    );
  } else {
    renderIt = (
      <button id={props.btn.buttonid} style={buttonSty} disabled={isDisabled} onClick={clickHandler}>
        {props.btn.text}
      </button>
    );
  }
  return (renderIt);
};

JButton.propTypes = {
  btn: React.PropTypes.object.isRequired,
  isDisabled: React.PropTypes.bool,
  isDesktop: React.PropTypes.bool,
  parentClickHandler: React.PropTypes.func
};

// btn.object = {
//   buttonid: 'identifier for parentClickHandler', this and one of the next three are required
//   text: 'standard button content',
//   backimg: 'url for a back image',
//   icon: 'used for an icon font',

//   style: 'predefined sizing for default style',
//   reStyle: 'replace the default style',
//   assignStyle: 'use Object.assign with the default style'
// }

module.exports = JButton;
