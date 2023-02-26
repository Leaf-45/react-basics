import { Button } from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const Medal = (props) => 
{
    const { onAdd, onSubtract, country, medalColor, medalName, medalCount } = props;

    return ( 
        <div>
            <div> {medalName} Medals {country[medalCount]} <WorkspacePremiumOutlinedIcon style={{ color: medalColor}}/></div>
            <Button variant='outlined' onClick={ () => onSubtract(country.id, medalCount) }>-</Button>
            <Button variant='outlined' onClick={ () => onAdd(country.id, medalCount)}>+</Button>   
        </div> );
}

/*
class Medal extends Component 
{
    render() { 
        const { onAdd, onSubtract, country, medalColor, medalName, medalCount } = this.props;
        return ( 
        <div>
            <div> {medalName} Medals {country[medalCount]} <WorkspacePremiumOutlinedIcon style={{ color: medalColor}}/></div>
            <Button variant='outlined' onClick={ () => onSubtract(country.id, medalCount) }>-</Button>
            <Button variant='outlined' onClick={ () => onAdd(country.id, medalCount)}>+</Button>   
        </div> );
        }
}
*/

export default Medal