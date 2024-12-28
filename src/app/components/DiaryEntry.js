
export default function DiaryEntry({ title, content }) {
    return (
      <div className="diary-entry">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  }
  