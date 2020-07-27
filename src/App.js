import React, { Component } from "react";
import "./App.css";
import TextInput from "./TextInput";
import TodoList from "./TodoList";
import DeleteButton from "./DeleteButton";
import StatusTab from "./StatusTab";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      todoItems: [],
      isCompleted: false,
      currentTab: "active",
    };
  }

  componentDidMount() {
    let todoItems = localStorage.getItem("todos");
    if (todoItems) {
      todoItems = JSON.parse(todoItems);
      this.setState({ todoItems }, () => console.log(this.state.todoItems));
    }
  }

  handleSubmit = (e) => {
    const { todo, todoItems } = this.state;
    e.preventDefault();
    if (!todo) {
      alert("Input must not be empty.");
      return;
    }

    const todoItem = {
      id: Date.now(),
      item: todo,
      isCompleted: false,
    };
    const todos = [...todoItems];
    todos.push(todoItem);

    this.setState({
      todo: "",
      todoItems: todos,
    });

    //store todos in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  handleDelete = (id) => {
    const todoItems = [...this.state.todoItems];
    const index = todoItems.findIndex((todo) => todo.id === id);
    todoItems.splice(index, 1);
    console.log(todoItems);

    this.setState({
      todoItems,
    });

    //update localStorage
    localStorage.setItem("todos", JSON.stringify(todoItems));
  };

  handleDeleteAllItems = () => {
    let todoItems = [...this.state.todoItems];
    todoItems.length = 0;

    this.setState({
      todoItems,
    });

    //update localStorage
    localStorage.clear();
  };

  handleInputChange = (e) => {
    // console.log(e.target.value);
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  handleStatusChange = (id, checked) => {
    console.log(checked);
    const todoItems = [...this.state.todoItems];
    const item = todoItems.find((todo) => todo.id === id);
    // console.log(item);
    checked = !this.state.isCompleted;
    item.isCompleted = checked;

    this.setState({ isCompleted: checked, todoItems });
    console.log(checked);
    console.log(item);
    console.log(todoItems);
  };

  handleStatusTabs = (e) => {
    console.log(e);
  };

  render() {
    const { todo, todoItems, isCompleted } = this.state;
    return (
      <div className="App">
        <h1>#todo</h1>
        <StatusTab displayAll={this.handleStatusTabs} />
        <TextInput
          onSubmit={this.handleSubmit}
          todo={todo}
          onChange={this.handleInputChange}
        />
        <TodoList
          todoItems={todoItems}
          checked={isCompleted}
          changeStatus={this.handleStatusChange}
          onDelete={this.handleDelete}
        />
        <DeleteButton
          className="delete-all-btn"
          onDelete={this.handleDeleteAllItems}
        />
      </div>
    );
  }
}

export default App;
