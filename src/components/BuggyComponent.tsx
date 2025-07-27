const BuggyComponent = () => {
  throw new Error("Тестовая ошибка для проверки ErrorBoundary");
  return <div>Вы не должны это видеть</div>;
};

export default BuggyComponent;