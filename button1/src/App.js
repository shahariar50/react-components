import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Teal</h1>
        <Button variantColor="teal" size="xs" variant="solid">
          Solid
        </Button>
        <Button variantColor="teal" size="sm" variant="outline">
          Outline
        </Button>
        <Button variantColor="teal" size="md" variant="link">
          Link
        </Button>
        <Button variantColor="teal" size="lg" variant="ghost">
          Ghost
        </Button>
        <Button variantColor="teal" size="md" leftIcon="email">
          Email
        </Button>
        <Button variantColor="teal" size="md" rightIcon="arrow-forward">
          Call Us
        </Button>
        <Button variantColor="teal" size="md" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <h1>Green</h1>
        <Button variantColor="green" size="xs" variant="solid">
          Solid
        </Button>
        <Button variantColor="green" size="sm" variant="outline">
          Outline
        </Button>
        <Button variantColor="green" size="md" variant="link">
          Link
        </Button>
        <Button variantColor="green" size="lg" variant="ghost">
          Ghost
        </Button>
        <Button variantColor="green" size="md" leftIcon="email">
          Email
        </Button>
        <Button variantColor="green" size="md" rightIcon="arrow-forward">
          Call Us
        </Button>
        <Button variantColor="green" size="md" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <h1>Red</h1>
        <Button variantColor="red" size="xs" variant="solid">
          Solid
        </Button>
        <Button variantColor="red" size="sm" variant="outline">
          Outline
        </Button>
        <Button variantColor="red" size="md" variant="link">
          Link
        </Button>
        <Button variantColor="red" size="lg" variant="ghost">
          Ghost
        </Button>
        <Button variantColor="red" size="md" leftIcon="email">
          Email
        </Button>
        <Button variantColor="red" size="md" rightIcon="arrow-forward">
          Call Us
        </Button>
        <Button variantColor="red" size="md" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <h1>Blue</h1>
        <Button variantColor="blue" size="xs" variant="solid">
          Solid
        </Button>
        <Button variantColor="blue" size="sm" variant="outline">
          Outline
        </Button>
        <Button variantColor="blue" size="md" variant="link">
          Link
        </Button>
        <Button variantColor="blue" size="lg" variant="ghost">
          Ghost
        </Button>
        <Button variantColor="blue" size="md" leftIcon="email">
          Email
        </Button>
        <Button variantColor="blue" size="md" rightIcon="arrow-forward">
          Call Us
        </Button>
        <Button variantColor="blue" size="md" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <h1>Yellow</h1>
        <Button variantColor="yellow" size="xs" variant="solid">
          Solid
        </Button>
        <Button variantColor="yellow" size="sm" variant="outline">
          Outline
        </Button>
        <Button variantColor="yellow" size="md" variant="link">
          Link
        </Button>
        <Button variantColor="yellow" size="lg" variant="ghost">
          Ghost
        </Button>
        <Button variantColor="yellow" size="md" leftIcon="email">
          Email
        </Button>
        <Button variantColor="yellow" size="md" rightIcon="arrow-forward">
          Call Us
        </Button>
        <Button variantColor="yellow" size="md" disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
}

export default App;
