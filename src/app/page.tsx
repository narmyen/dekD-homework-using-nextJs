'use client'
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import BookmarkList from './components/BookmarkList';
import BookmarkService from './services/BookmarkService';
import { Book } from './components/interface';


export default function Home() {
  const [bookmarks, setBookmarks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      BookmarkService.fetchBookmark()
        .then(bookmarks => {
          setBookmarks(bookmarks)
        })
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(bookmarks)
  }, [bookmarks])

  return (
    <>
      <div className="transition-all duration-300">
        <Banner />
        <BookmarkList />
      </div>
    </>
  );
}
