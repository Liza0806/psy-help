import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Ошибка {error.status}</h1>
        <p>{error.statusText}</p>
        <a href="/">Вернуться на главную</a>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Упс! Что-то пошло не так.</h1>
      <p>{(error as Error).message || 'Неизвестная ошибка'}</p>
      <a href="/">Вернуться на главную</a>
    </div>
  );
};

export default ErrorBoundary;
