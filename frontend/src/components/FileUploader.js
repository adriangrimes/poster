import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

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
          <img
            className="upload-thumbnail rounded-lg m-1"
            src={image.src}
            alt={image.alt}
            key={image.src}
            onClick={e => {
              e.stopPropagation();
              props.removeFile(image);
            }}
          />
        );
      }),
      <div key="upload-more" className="upload-more">
        +
      </div>
    ];
    uploaderContents = images;
  } else if (isDragActive) {
    uploaderContents = 'Drop to add...';
  }

  return (
    <div
      {...getRootProps()}
      className="file-uploader d-inline-flex justify-content-center align-items-center p-1"
    >
      <input {...getInputProps()} />
      <div className="text-center">{uploaderContents}</div>
    </div>
  );
}
