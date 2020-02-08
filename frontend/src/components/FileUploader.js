import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Button from 'react-bootstrap/Button';

export default function FileUploader(props) {
  const onDrop = useCallback(
    acceptedFiles => {
      let images = [];
      for (let i = 0; i < acceptedFiles.length; i++) {
        const image = {
          src: window.URL.createObjectURL(acceptedFiles[i]),
          alt: acceptedFiles[i].name
        };
        images.push(image);
      }
      props.addFiles(images);
    },
    [props]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDrop
  });

  let uploaderContents = (
    <span>
      Drag and drop files here,
      <br /> or click to select files
    </span>
  );
  if (props.files.length) {
    const images = [
      ...props.files.map((image, index) => {
        return (
          <span
            className="d-inline-block upload-thumbnail-container "
            key={image.src}
          >
            <Button
              variant="default"
              className="upload-thumbnail-remove rounded-circle p-1 m-2"
              onClick={e => {
                e.stopPropagation();
                props.removeFile(image);
              }}
            >
              ✕
            </Button>
            <img
              className="upload-thumbnail rounded-lg m-1"
              src={image.src}
              alt={image.alt}
            />
          </span>
        );
      })
    ];
    if (props.files.length < props.maxFiles) {
      images.push(
        <span
          className="d-inline-block upload-thumbnail-container "
          key="add-upload"
        >
          <img
            className="upload-thumbnail rounded-lg m-1"
            src="add.svg"
            alt="Add another upload"
          />
        </span>
      );
    }
    uploaderContents = images;
  } else if (isDragActive) {
    uploaderContents = 'Drop to add...';
  }

  return (
    <div
      {...getRootProps()}
      className={`file-uploader d-inline-flex justify-content-center align-items-center p-1 ${props.className}`}
    >
      <input {...getInputProps()} />
      <div className="text-center">{uploaderContents}</div>
    </div>
  );
}
