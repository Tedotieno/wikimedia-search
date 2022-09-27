const PageItem = ({ page, isLastPage }) => {
  return (
    <div>
      {!isLastPage ? (
        <div className="page-container">
          <div className="page-image-container">
            <img className="page-image" alt="" src={page?.thumbnail?.url} />
          </div>
          <div className="page-text">
            <h4>{page?.title}</h4>
            <p>{page?.description}</p>
          </div>
        </div>
      ) : (
        <div>Search for pages containing [x]... </div>
      )}
    </div>
  );
};

const PagesList = ({ pages }) => {
  const lastItemIndex = pages?.length - 1;

  return (
    <div>
      {pages?.map(({ id, ...page }, index) => (
        <PageItem key={id} page={page} isLastPage={index === lastItemIndex} />
      ))}
    </div>
  );
};

export { PagesList };
