import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

export class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      //trim() нужен для очистки пробелов в строке
      return this.props.showAlert("Плохое имя поста");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  //универсальный способ обработки инпутов, для всех инпутов
  changeInputHandler = (e) => {
    // e.persist(); // Начиная с 17 версии, вызов e.persist() не имеет смысла, потому что объекты событий SyntheticEvent больше не добавляются в пул.
    //es6 синтаксис то что возвращаем то в ()
    this.setState((prev) => ({
      ...prev,
      ...{ [e.target.name]: e.target.value },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Заголовок поста
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Example input placeholder"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

// функция передает в компонент в качестве пропсов диспатч
//ключ и значение совпадают ( createPost: createPost)
const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({ alert: state.app.alert });

//connect может принимать и классовый компонент как в этом случае
// export default connect(null, mapDispatchToProps)(PostForm);
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

//connect(null, mapD....   null - значит что мы не передаем в компонент стейт
