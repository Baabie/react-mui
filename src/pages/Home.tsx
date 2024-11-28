import { Button } from "@mui/material";

export function Home() {
  return (
    <div>
      <h1>Olá mundo - Home</h1>

      <Button>Defaul Button</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outline</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  );
}
