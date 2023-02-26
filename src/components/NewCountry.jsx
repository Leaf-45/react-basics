import { Button } from '@mui/material';

const NewCountry = (props) => 
{
    const promptUser = () => {
        const countryName = prompt("Enter the name of the country you want to add")
        if (countryName.length !== 0) props.addNewCountry(countryName)   
    }

    return ( 
        <div className='center'>
            <Button onClick={promptUser} variant="contained" color="success">Add Country</Button>
        </div>);
}


export default NewCountry