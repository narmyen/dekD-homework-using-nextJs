import Image from 'next/image';
import { useRef, useState } from 'react';
import banner1 from './images/banner1.png';
import banner2 from './images/banner2.png';
import banner3 from './images/banner3.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [banner1, banner2, banner3];

function Banner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let newIndex = currentIndex;

    if (direction === 'right') {
      newIndex = (currentIndex + 1) % images.length; // วนกลับไปที่อันแรกเมื่อสุด
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length; // วนกลับไปที่อันสุดท้ายเมื่อย้อนกลับ
    }

    setCurrentIndex(newIndex);
    const scrollAmount = scrollContainer.clientWidth; // ขนาดของแต่ละรูป
    scrollContainer.scrollTo({ left: newIndex * scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="justify-center  relative flex items-center mx-8 sm:px-[20px] md:px-[25px] lg:px-[200px]">
      {/* ปุ่มเลื่อนซ้าย */}
      <button
        className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full"
        onClick={() => scroll('left')}
      >
        <ChevronLeft size={32} />
      </button>

      {/* แถบรูปภาพ */}
      <div
        ref={scrollRef}
        className="flex w-[700px] overflow-hidden scroll-smooth"
      >
        {images.map((src, index) => (
          <Image key={index} alt="banner" width={700} height={373} src={src} />
        ))}
      </div>

      {/* ปุ่มเลื่อนขวา */}
      <button
        className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full"
        onClick={() => scroll('right')}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}

export default Banner;
