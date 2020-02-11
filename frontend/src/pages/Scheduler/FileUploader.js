import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Button from 'react-bootstrap/Button';

export default function FileUploader(props) {
  const onDrop = useCallback(
    acceptedFiles => {
      let images = [];
      // loop through accepted files and create a blob URL to display
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDrop
  });

  const createUploadThumbnails = files => {
    return files.map((image, index) => {
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
            <strong>✕</strong>
          </Button>
          <img
            className="upload-thumbnail rounded-lg m-1"
            src={image.src}
            alt={image.alt}
          />
        </span>
      );
    });
  };

  const addMoreUploadsIcon = (
    <span
      className="d-inline-block upload-thumbnail-container "
      key="add-upload"
    >
      <img
        className="upload-thumbnail rounded-lg m-1"
        src="assets/icons/add.svg"
        alt="Add another upload"
      />
    </span>
  );

  let uploaderContents = null;
  if (props.files.length) {
    uploaderContents = createUploadThumbnails(props.files);
    if (props.files.length < props.maxFiles) {
      uploaderContents.push(addMoreUploadsIcon);
    }
  }

  return (
    <div
      {...getRootProps()}
      className={`${props.className} file-uploader d-inline-flex justify-content-center align-items-center p-1`}
    >
      <input {...getInputProps()} />
      <div>
        {!uploaderContents && (
          <img
            src="assets/icons/img.svg"
            alt="Upload a file"
            className="upload-thumbnail"
          />
        )}
        {uploaderContents}
      </div>
    </div>
  );
}
