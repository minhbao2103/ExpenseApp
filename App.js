import { useState } from "react";
import "./App.css";


import BackgroundAnimation from "../src/background/BackgroundAnimation";
import Income from "../src/income/Income";
import Expense from "../src/expense/Expense";
import Form from "../src/form/Form";
import ItemList from "../src/form/ItemList";


function App() {
  const [lists, setLists] = useState([]);
  const [total, setTotal] = useState(0);
  const addItem = (list) => {
    const newList = [list, ...lists];
    const sumCalc = caculateAmount(newList);
    setTotal(sumCalc);
    setLists(newList);
  };
  
  const caculateAmount = (list) => {
    const sumAmount = list.reduce((initialValue, item) => {
      if (item.type === "Income") return initialValue + +item.amount;
      else return initialValue - item.amount;
    }, 0);
    return sumAmount;
  };
  const removeItem = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };
  return (
    <div className="App">
      <BackgroundAnimation />
      {/* <Income lists={lists} total={total}/> */}
      <Form addItem={addItem} total={total} />
      <ItemList lists={lists} removeItem={removeItem} />
      {/* <Expense/> */}
    </div>
  );
}

export default App;
