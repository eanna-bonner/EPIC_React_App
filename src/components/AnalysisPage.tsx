import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';

export function AnalysisPage() {
    
    interface Chord {
        chord: string;
        timestamp: string;
        // include other properties as needed
      }

    const [chords, setChords] = useState<Chord[]>([]);
    // Make a GET request to your API to retrieve the user data
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const filename = urlParams.get('filename');

        fetch('https://i5xzaxat8e.execute-api.us-east-1.amazonaws.com/EPIC_Chord_Detector/analyse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filename })
        })
        .then(response => response.json())
        .then(data => {
            const filteredChords = data.filter((chord: { chord: string; }) => chord.chord !== "N");
            setChords(filteredChords)
        })
        .catch(error => console.error(error));
    }, []);
    
    return (
        <>
            <Header />
            <div>
                <h1>Analysis Page</h1>
                <p>Analysis page content goes here.</p>
            </div>
            <div>
            <h1>Chords List</h1>
            <ul>
                {/* Render the chords list */}
                {chords.map((chord, index) => (
                    <li key={index}>{chord.chord} at {chord.timestamp}</li>
                ))}
            </ul>
        </div>
            <Footer />
        </>
    );
}