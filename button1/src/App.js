import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Teal</h1>
        <Button variantColor="teal" size="xs" variant="solid">
          Button
        </Button>
        <Button variantColor="teal" size="sm" variant="outline">
          Button
        </Button>
        <Button variantColor="teal" size="md" variant="link">
          Button
        </Button>
        <Button variantColor="teal" size="lg" variant="ghost">
          Button
        </Button>
      </div>
      <div>
        <h1>Green</h1>
        <Button variantColor="green" size="xs" variant="solid">
          Button
        </Button>
        <Button variantColor="green" size="sm" variant="outline">
          Button
        </Button>
        <Button variantColor="green" size="md" variant="link">
          Button
        </Button>
        <Button variantColor="green" size="lg" variant="ghost">
          Button
        </Button>
      </div>
      <div>
        <h1>Red</h1>
        <Button variantColor="red" size="xs" variant="solid">
          Button
        </Button>
        <Button variantColor="red" size="sm" variant="outline">
          Button
        </Button>
        <Button variantColor="red" size="md" variant="link">
          Button
        </Button>
        <Button variantColor="red" size="lg" variant="ghost">
          Button
        </Button>
      </div>
      <div>
        <h1>Blue</h1>
        <Button variantColor="blue" size="xs" variant="solid">
          Button
        </Button>
        <Button variantColor="blue" size="sm" variant="outline">
          Button
        </Button>
        <Button variantColor="blue" size="md" variant="link">
          Button
        </Button>
        <Button variantColor="blue" size="lg" variant="ghost">
          Button
        </Button>
      </div>
      <div>
        <h1>Yellow</h1>
        <Button variantColor="yellow" size="xs" variant="solid">
          Button
        </Button>
        <Button variantColor="yellow" size="sm" variant="outline">
          Button
        </Button>
        <Button variantColor="yellow" size="md" variant="link">
          Button
        </Button>
        <Button variantColor="yellow" size="lg" variant="ghost">
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
