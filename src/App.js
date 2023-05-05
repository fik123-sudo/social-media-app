
import {Button} from '@mui/material';
import {Add,Settings} from '@mui/icons-material';
function App() {
  return (
    <div>
     
     
      <Button variant="text">Text</Button>
      <Button 
      startIcon={<Settings/>} 
      variant="contained" 
      color = "secondary" 
      size='small'>Contained
      </Button>
      <Button 
      startIcon={<Add/>} 
      variant="contained" 
      color = "success" 
      size='small'>Contained
      </Button>
      <Button variant="
      outlined" disabled>Outlined</Button>    
      <h1> success </h1> 
    </div>
  );
}

export default App;
