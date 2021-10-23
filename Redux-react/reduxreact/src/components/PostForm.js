import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  submitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div class="mb-3">
          <label htmlFor="title" className="form-label">
            Заголовок поста
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Example input placeholder"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}
