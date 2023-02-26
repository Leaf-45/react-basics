import Medal from './Medal'
import { Button } from '@mui/material';

const Country = (props) => 
{
  const { onDelete, onAdd, onSubtract, country } = props;

  return ( 
    <div className='center'>
        
        <div>{country.name}</div>
        <Medal 
        country={country}
        medalName={"Gold"}
        medalCount={"goldMedalCount"}
        medalColor={"Gold"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

        <Medal
        country={country}
        medalName={"Silver"}
        medalCount={"silverMedalCount"}
        medalColor={"silver"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

        <Medal
        country={country}
        medalName={"Bronze"}
        medalCount={"bronzeMedalCount"}
        medalColor={"#FF5733"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

    <p>Total Medals: {country.goldMedalCount + country.silverMedalCount + country.bronzeMedalCount}</p>

    <Button onClick={ () => onDelete(country.id) } variant='contained'>Delete</Button>
    </div> );
}

/*
class Country extends Component {
  render() { 
    
    const { onDelete, onAdd, onSubtract, country } = this.props;
    return ( 
    <div className='center'>
        
        <div>{country.name}</div>
        <Medal 
        country={country}
        medalName={"Gold"}
        medalCount={"goldMedalCount"}
        medalColor={"Gold"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

        <Medal
        country={country}
        medalName={"Silver"}
        medalCount={"silverMedalCount"}
        medalColor={"silver"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

        <Medal
        country={country}
        medalName={"Bronze"}
        medalCount={"bronzeMedalCount"}
        medalColor={"#FF5733"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

    <p>Total Medals: {country.goldMedalCount + country.silverMedalCount + country.bronzeMedalCount}</p>

    <Button onClick={ () => onDelete(country.id) } variant='contained'>Delete</Button>
    </div> );
    }
}
*/
export default Country