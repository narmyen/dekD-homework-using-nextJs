import Banner from './components/Banner';
import BookmarkList from './components/BookmarkList';

export default function Home() {
  return (
    <>
      <div className="transition-all duration-300">
        <Banner />
        <BookmarkList />
      </div>
    </>
  );
}
