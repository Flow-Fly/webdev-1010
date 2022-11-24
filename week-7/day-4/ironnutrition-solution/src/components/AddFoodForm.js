import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ setFood }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0
  });


  function handleSubmit(e) {
    e.preventDefault();

    setFood((currentState) => {
      const copy = [...currentState];
      copy.push(formData);
      return copy;
    })

    setFormData({
      name: "",
      image: "",
      calories: 0,
      servings: 0
    })
  }

  const { name, image, calories, servings } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={({ target: { value } }) => { setFormData({ ...formData, name: value }) }} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => { setFormData({ ...formData, image: e.target.value }) }} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(e) => { setFormData({ ...formData, calories: parseInt(e.target.value) }) }} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={(e) => { setFormData({ ...formData, servings: parseInt(e.target.value) }) }} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
