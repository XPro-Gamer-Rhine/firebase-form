import React, { useState } from 'react';
import { db } from '../Firebase/firebase';

import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import Fetch from './fetch';

const Upload = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const uploadRef = async () => {
    await addDoc(collection(db, 'test'), {
      title: title,
      description: description,
      category: category,
      timestamp: serverTimestamp(),
    });
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className="w-full max-w-sm mt-10">
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
            htmlFor="inline-full-name"
          >
            Title
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
            htmlFor="inline-full-name"
          >
            Category
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
            htmlFor="inline-full-name"
          >
            Description
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
            type="button"
            onClick={uploadRef}
          >
            Upload
          </button>
        </div>
      </div>
      <Fetch />
    </div>
  );
};

export default Upload;
