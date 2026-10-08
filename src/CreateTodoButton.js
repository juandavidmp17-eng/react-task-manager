function CreateTodoButton(props) {
  const onClickButton = () => {
    alert('Aqui deberia abrir el modal');
  };    

  return (
    <button onClick={onClickButton}>
      +
    </button>
  );
}   

export { CreateTodoButton };