import PageMeta from "../components/PageMeta";

const NotFound = () => (
  <>
    <PageMeta
      title="404 — Страница не найдена"
      description="Извините, запрашиваемая страница не существует."
      noindex={true}
    />

  </>
);
export default NotFound;