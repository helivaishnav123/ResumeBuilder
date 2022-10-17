import { Button, TextField } from "@material-ui/core";
import "./styles.css";
import GetInput  from "./UserInputs";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Resume builder</h1>
      <div>
        <p>Name:</p>
        <TextField id="name" />        
        <Button type="submit" variant="contained" id="next" onClick={GetInput.username}>Next</Button>
      </div>
    </div>
  );
}
