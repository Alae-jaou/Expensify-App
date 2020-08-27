import React from 'react'

export default class AddOption extends React.Component {
  
  state = {
    error: undefined
  };

  handlAddClick = (e)=> {
    e.preventDefault();
    console.log('testing');
    const option = e.target.elements.inpOption.value;
    const errore = this.props.handlAddClick(option);
    this.setState({ error: errore });
  }

  render() {
    return (
      <div  >
        {this.state.error && <p className="handle-error" > {this.state.error} </p>}
        <form className=" options-body add-option" onSubmit={this.handlAddClick} >
          <input className="input__option" name='inpOption' />
          <button  className="small-button"> Add element </button>
        </form>

      </div>
    );
  }
}
