import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={s.wrapperLoadBtn}>
      <button className={s.loadBtn} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;