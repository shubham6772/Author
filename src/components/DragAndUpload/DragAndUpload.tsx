import React, { useState } from 'react';
import { Button } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import "./DragAndUpload.scss";
const DragAndUpload = () => {
    const [fileName, setFileName] = useState<string | null>(null);

    // Function to check file extension
    const checkFileExtension = (file: File) => {
        const extension = file.name.split('.').pop(); // Get the file extension
        if (extension) {
            return extension.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        }
        return '';
    };

    // Handle file selection from input
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setFileName(file ? file.name : null);

            const extension = checkFileExtension(file);

            if (extension === 'txt') {
                console.log('Text file selected:', file);
                const reader = new FileReader();
                reader.onload = (e: ProgressEvent<FileReader>) => {
                    const fileContent = e.target?.result;
                    console.log('File content:', fileContent); // Log file content to console
                };
                reader.readAsText(file);
            } else if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
                console.log('Image file selected:', file);
                const reader = new FileReader();
                reader.onload = (e: ProgressEvent<FileReader>) => {
                    const fileContent = e.target?.result;
                    console.log('Image data URL:', fileContent); // Log image as data URL
                };
                reader.readAsDataURL(file); // For image files, we read it as a data URL
            } else {
                console.log('Unsupported file type:', extension);
            }
        }
    };

    // Handle files dropped onto the area
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files) {
            const file = e.dataTransfer.files[0];
            setFileName(file ? file.name : null);

            const extension = checkFileExtension(file);

            if (extension === 'txt') {
                console.log('Text file dropped:', file);
                const reader = new FileReader();
                reader.onload = (e: ProgressEvent<FileReader>) => {
                    const fileContent = e.target?.result;
                    console.log('File content:', fileContent);
                };
                reader.readAsText(file);
            } else if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
                console.log('Image file dropped:', file);
                const reader = new FileReader();
                reader.onload = (e: ProgressEvent<FileReader>) => {
                    const fileContent = e.target?.result;
                    console.log('Image data URL:', fileContent);
                };
                reader.readAsDataURL(file); // For image files
            } else {
                console.log('Unsupported file type dropped:', extension);
            }
        }
    };

    // Prevent the default action when dragging over the element
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className='drag-and-uplaod-main-container'>
            <div className='drag-and-upload-file-outer-box'
                onDrop={handleDrop} // Handle drop event
                onDragOver={handleDragOver} // Prevent default drag over behavior 
            >
                <input
                    type="file"
                    id="file-input"
                    style={{ display: 'none' }} // Hide the input element
                    onChange={handleFileChange}
                />

                <label htmlFor="file-input">
                    <Button
                        variant="contained"
                        component="span"
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            backgroundColor: "#72BF78", // Customize the button color
                            '&:hover': {
                                backgroundColor: "#5a9f5a", // Hover color
                            },
                        }}
                    >
                        {fileName ? `Selected: ${fileName}` : 'Drag & Drop or Select a file'}
                    </Button>
                </label>

                <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
                    {fileName ? `File: ${fileName}` : 'Drag a file here or click to select'}
                </p>
            </div>
        </div>
    );
};

export default DragAndUpload;
