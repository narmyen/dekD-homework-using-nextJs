'use client'

import React, { useState } from 'react'
import BookmarkItem from './BookmarkItem'
import { Delete } from './icons/BookmaskIcons'
import mockBookmarks from './mockupdata'

function BookmarkList() {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isCancel, setCancel] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([]) // จัดเก็บ index ของ item ที่เลือก
  const [bookmarks, setBookmarks] = useState(mockBookmarks) // ใช้ mockupdata เป็นค่าเริ่มต้น

  // ฟังก์ชันสำหรับเลือกหรือยกเลิกการเลือก item
  const handleSelect = (index: number) => {
    if (selectedItems.includes(index)) {
      // ถ้าเลือกไว้แล้ว ให้ยกเลิกการเลือก
      setSelectedItems(selectedItems.filter((item) => item !== index))
    } else {
      // ถ้ายังไม่ได้เลือก ให้เพิ่มเข้าไปในลิสต์
      setSelectedItems([...selectedItems, index])
    }
  }

  // ฟังก์ชันลบรายการที่เลือก
  const handleDelete = () => {
    // ลบรายการที่เลือกออกจาก bookmarks
    const newBookmarks = bookmarks.filter((_, index) => !selectedItems.includes(index))
    setBookmarks(newBookmarks)
    setSelectedItems([]) // รีเซ็ต selectedItems หลังจากลบ
  }

  return (
    <div className='mt-[55px] mx-8 sm:px-[20px] md:px-[25px] lg:px-[100px]'>
      <div className='border-b-[1px] border-black/40'>
        <h1 className='text-[32px]'>รายการที่คั่นไว้</h1>
      </div>

      <div className='pt-8 pb-6 opacity-50 flex items-center justify-between'>
        <h3>จำนวนทั้งหมด {bookmarks.length} รายการ</h3>

        {isEdit ? (
          <div className='flex gap-[8px]'>
            <div
              className='cursor-pointer border-2 rounded-full px-[1rem] py-[.3rem]'
              onClick={() => { setIsEdit(false); setCancel(true); setSelectedItems([]); }} // ยกเลิกการเลือกทั้งหมด
            >
              <p>ยกเลิก</p>
            </div>
            <div
              className='flex gap-2 items-center cursor-pointer border-2 rounded-full px-[1rem] py-[.3rem]'
              onClick={handleDelete} // ลบรายการที่เลือก
            >
              <Delete />
              <p>{selectedItems.length} รายการ</p>
            </div>
          </div>
        ) : (
          <div
            className='cursor-pointer border-2 rounded-full px-[1rem] py-[.3rem]'
            onClick={() => setIsEdit(true)}
          >
            <p>แก้ไข</p>
          </div>
        )}
      </div>

      <div className='pb-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {bookmarks.map((bookmark, index) => (
          <BookmarkItem
            key={index}
            bookmark={bookmark}
            isEdit={isEdit}
            isSelected={selectedItems.includes(index)} // เช็คว่ารายการนี้ถูกเลือกหรือไม่
            onSelect={() => handleSelect(index)} // ฟังก์ชันเลือก/ยกเลิก
          />
        ))}
      </div>
    </div>
  )
}

export default BookmarkList
