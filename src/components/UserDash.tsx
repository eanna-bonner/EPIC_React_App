import React, { useEffect, useState } from 'react';
import {Header} from './Header';
import {Footer} from './Footer';

export function UserDash() {
    
    interface Song {
        filename: string;
        // include other properties as needed
      }
    
    const [listItems, setListItems] = useState<Song[]>([]);

    useEffect(() => {
        // Fetch list items from S3 bucket
        fetch('https://i5xzaxat8e.execute-api.us-east-1.amazonaws.com/EPIC_Chord_Detector/listsongs', {
            method: 'GET'})
            .then(response => response.json())
            .then(data => setListItems(data))
            .catch(error => console.error(error));
    }, []);

    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (filename: string) => {
        // Make a DELETE request to your API to delete the user
        fetch('https://i5xzaxat8e.execute-api.us-east-1.amazonaws.com/EPIC_Chord_Detector/deletesong', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filename }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .catch(error => console.error(error));
    };

    const handleAnalyse = (filename: string) => {
        window.location.href = '/analysis?filename=' + filename;
    };


    return (
        <>
            <Header />
            <div>
                <h1>User Dashboard</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <table>
                    <thead>
                        <tr>
                            <th>Song Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(listItems) && listItems.filter((song) => {
                            if (searchTerm === "") {
                                return song;
                            } else if (song.filename.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return song;
                            }
                            return null;
                        }).map(song => (
                            <tr key={song.filename}>
                                <td>{song.filename}</td>
                                <td>
                                    <button onClick={() => handleDelete(song.filename)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => handleAnalyse(song.filename)}>Analyse</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};
