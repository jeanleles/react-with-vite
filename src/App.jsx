import React from "react";
import Produto from "./Produto";

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtolocal = window.localStorage.getItem("produto");
    if (produtolocal !== null) setProduto(produtolocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button style={{ margin: "8px" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "8px" }} onClick={handleClick}>
        smartphone
      </button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
