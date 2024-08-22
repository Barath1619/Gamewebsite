import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup.tsx";
import Alert from "./components/Alert";
import Button from "./components/Button/Button.tsx";
import Like from "./components/Like.tsx";
import ExpandableText from "./components/ExpandableText.tsx";
import Form from "./components/Form.tsx";
import ExpenseList from "./Expensetracker/components/ExpenseList.tsx";

function App() {
  const [count, setCount] = useState(0);
  const items = ["game1", "game2", "game3"];

  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;

{
  /* <ListGroup
          items={items}
          title="Game List"
          onSelectItem={handleSelectItem}
        /> */
}
// {alertVisible && (
//   <Alert onClose={() => setAlertVisible(false)}>
//     Hello this is <span style={{ color: "blue" }}>Barath</span>{" "}
//   </Alert>
// )}
// <Button
//   title="Barath button"
//   onClicked={() => setAlertVisible(true)}
//   color="primary"
// />
