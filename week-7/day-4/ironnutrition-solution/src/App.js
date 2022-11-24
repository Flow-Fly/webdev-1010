import { Button, Divider, Row } from 'antd';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foodJson from "./foods.json";

function App() {
  const [food, setFood] = useState(foodJson);
  const [searchString, setSearchString] = useState("");

  function removeFood(foodToRemove) {
    const remainingFood = food.filter(item => item !== foodToRemove);

    setFood(remainingFood);
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm setFood={setFood} />
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search {...{ searchString, setSearchString }} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {
          food
            .filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()))
            .map(item => <FoodBox key={item.name + item.calories} food={item} removeFood={removeFood} />)
        }
      </Row>
    </div>
  );
}

export default App;
