import React, { Component } from 'react';
import { Button } from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';


class Country extends Component {
  state = { 
    name: this.props.name,        
    gold: this.props.gold,
    }
    handleIncrement = () => 
    {
      this.setState({gold: this.state.gold + 1})
    }
    handleDecrement = () => 
    {
      if (this.state.gold > 0)
      {
        this.setState({gold: this.state.gold - 1})
      }
    }
  render() { 
    return ( 
    <div className='center'>
        <div>{this.state.name}</div>
        <div>Gold Medals {this.state.gold} <WorkspacePremiumOutlinedIcon style={{ color:"gold"}}/></div>
        <Button variant='outlined' onClick={ this.handleIncrement }>+</Button>
        <Button variant='outlined' onClick={ this.handleDecrement }>-</Button>
    </div> );
    }
}

export default Country