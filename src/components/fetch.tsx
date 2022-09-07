/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { Link } from 'react-router-dom';

const Fetch = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const collectionRef = collection(db, 'test');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    const response = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return response;
  }, []);
  return (
    <div className="w-auto mt-16 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg tex6t-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {posts.map((post) => (
        <div key={post.id} className="flex">
          <div>
            <Link to={`/components/${post.id}`}>
              <div className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                {post.title} - {post.category} - {post.description}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
