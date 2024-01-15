
// MarkdownViewer.js

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


const MarkdownViewer = ({ mdFilePath }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(mdFilePath);
                const markdownText = await response.text();
                setMarkdownContent(markdownText);
            } catch (error) {
                console.error('Error fetching markdown file:', error);
            }
        };

        fetchMarkdown();
    }, [mdFilePath]);

    return (
        <div>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>

    );
};

export default MarkdownViewer;
