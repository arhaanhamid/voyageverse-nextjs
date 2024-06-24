import React, { useState, useRef, useEffect } from 'react';

function UploadImage() {
  const [images, setImages] = useState([]);
  const dropAreaRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const dropArea = dropAreaRef.current;

    if (dropArea) {
      // Prevent default drag behaviors
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
      });

      function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
      }

      // Highlight drop area when item is dragged over it
      ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.add('hover'), false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.remove('hover'), false);
      });

      // Handle dropped files
      dropArea.addEventListener('drop', handleDrop, false);

      function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
      }

      // Clean up event listeners on unmount
      return () => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
          dropArea.removeEventListener(eventName, preventDefaults);
        });
        dropArea.removeEventListener('drop', handleDrop);
      };
    }
  }, []);

  const handleFiles = (files) => {
    const newImages = [];
    [...files].forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newImages.push(e.target.result);
          if (newImages.length === files.length) {
            setImages(prevImages => [...prevImages, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert('Only image files are allowed!');
      }
    });
  };

  const handleInputChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <div className="col-span-full">
      <div id="drop-area" ref={dropAreaRef} className="flex justify-center items-center rounded-lg border border-dashed border-gray-300/25 px-6 py-5">
        <div className="text-center">
          {images.length === 0 && (
            <svg
              className="mx-auto h-16 w-16 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <div className="mt-4 flex items-center justify-center text-sm leading-6 text-gray-300">
            <label
              className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              onClick={handleUploadClick}
            >
              <span>Upload a file</span>
            </label>
            <input
              id="fileElem"
              type="file"
              className="sr-only"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleInputChange}
            />
            <p className="pl-1">Or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-300">
            PNG, JPG, GIF up to 10MB
          </p>
          <div className="grid grid-cols-5 gap-4 mt-6">
            {images.map((src, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-4">
                <img src={src} alt="uploaded preview" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
