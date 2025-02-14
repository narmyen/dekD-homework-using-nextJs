'use client'

import React from 'react'
import { ChapterChoiceIcon, DateBookMask, NoneSelect, Selected } from './icons/BookmaskIcons'
import Image from 'next/image'
import { Book } from './interface'

interface BookmarkItemProps {
  bookmark: Book
  isEdit: boolean
  isSelected: boolean
  onSelect: () => void
}

function BookmarkItem({ bookmark, isEdit, isSelected, onSelect }: BookmarkItemProps) {
  return (
    <div className='flex gap-2 items-between shadow-md rounded-2xl p-4'>
      <div>
        <Image
          alt={bookmark.title}
          width={100}
          height={300}
          src={bookmark.imageUrl}
          className='rounded-md object-cover  h-[180px] w-[150px]'
        />
      </div>
      <div className='flex flex-col justify-between w-full gap-2'>
        <div className='border-b-[1.5px] border-orange-400/40 flex justify-between items-start '>
          <div className='pb-4'>
            <h2>{bookmark.title}</h2>
            <h3 className='opacity-50 text-[12px]'>HELLO...</h3>
            <p className='font-semibold text-[10px]'>{bookmark.author}</p>
          </div>
          {isEdit && (
            <div className='cursor-pointer' onClick={onSelect}>
              {isSelected ? <Selected /> : <NoneSelect />}
            </div>
          )}
        </div>
        <div className=''>
          <div className='flex items-center gap-2 hover:underline hover:text-orange-900 cursor-pointer'>
            <ChapterChoiceIcon />
            <p>{bookmark.chapter}</p>
          </div>
          <div className='flex items-center gap-2'>
            <DateBookMask />
            <p>{bookmark.lastMark}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookmarkItem
