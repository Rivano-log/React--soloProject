const SkeletonCard = () => {
  return (
    <article className="card">
      <div className="card__media">
        <div className="skeleton skeleton--img"></div>
      </div>

      <div className="card__body">
        <div className="skeleton skeleton--line"></div>
        <div className="skeleton skeleton--line"></div>
        <div className="skeleton skeleton--line"></div>
      </div>
    </article>
  );
};

export default SkeletonCard;