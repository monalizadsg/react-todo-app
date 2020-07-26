import React, { Component } from "react";
import "./App.css";
import TextInput from "./TextInput";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      todoItems: [],
      isCompleted: false,
    };
  }

  componentDidMount() {
    //check if key exist in localStorage
    const todoItems = JSON.parse(localStorage.getItem("todos"));
    if (!todoItems) {
      this.setState({ todoItems: [] });
    } else {
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
      id: todoItems.length + 1,
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
    localStorage.setItem("todo", "");
  };

  handleDelete = (id) => {
    const { todoItems } = this.state;
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);

    this.setState({
      todoItems: updatedTodos,
    });

    //update localStorage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { todo, todoItems, isCompleted } = this.state;
    return (
      <div className="App">
        <h1>#todo</h1>
        <TextInput
          onSubmit={this.handleSubmit}
          todo={todo}
          onChange={this.handleInputChange}
        />
        <TodoList
          todoItems={todoItems}
          checked={isCompleted}
          onChange={this.handleInputChange}
          onDelete={this.handleDelete}
          onDeleteAllItems={this.handleDeleteAllItems}
        />
      </div>
    );
  }
}

export default App;
