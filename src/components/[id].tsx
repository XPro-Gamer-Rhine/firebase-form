import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

export const Post = () => {
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    const collectionRef = doc(db, 'test', String(id));
    getDoc(collectionRef)
      .then((doc) => {
        const response = {
          title: doc.data()?.title,
          category: doc.data()?.category,
          description: doc.data()?.description,
        };
        setPost(response);
      })
      .catch((error) => {});
  }, []);
  const handleDelete = () => {
    const collectionRef = doc(db, 'test', String(id));
    deleteDoc(collectionRef)
      .then(() => {
        alert('Deleted');
        navigate('/');
      })
      .catch((error) => {});
  };
  return (
    <div className="w-auto mt-16 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg tex6t-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <div className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        {post?.title}
      </div>
      <div className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        {post?.category}
      </div>
      <div className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        {post?.description}
      </div>
      <button
        className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-red-600 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-500 dark:focus:text-white"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
