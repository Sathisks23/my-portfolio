// app/satish-diaries/page.js
import DiaryEntry from '../components/DiaryEntry';

const diaries = [
  { title: 'My Journey Begins', content: 'This is where I start sharing my journey in web development...' },
  { title: 'Learning Next.js', content: 'Today, I’m learning Next.js, and I’m excited about it!' }
];

export default function SatishDiaries() {
  return (
    <section>
      <h1>Satish Diaries</h1>
      {diaries.map((entry, index) => (
        <DiaryEntry key={index} title={entry.title} content={entry.content} />
      ))}
    </section>
  );
}
