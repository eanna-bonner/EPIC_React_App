import { Header } from './Header';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <>
      <Header />      
        <div>
            <h1>The Chord Box</h1>
            <div>
                <h2>About the chord box</h2>
                <p>The chord box records your music so you don't have to! Simply play away, push the upload button and sign in on this webpage to view your song analysis!</p>
            </div>
            <div>
                <h2>How it works</h2>
                <p>Once the box has uploaded your recorded song, our world class AI software analyses the music and returns the chords to your personal song analysis page. Sign in and let's get started!</p>
            </div>
            <div>
                <h2>Where do I start?</h2>
                <p>Getting started is as simple as 3 easy steps!</p>
                <ol>
                    <li>Sign up to our platform from <a href='/signup'>this link</a></li>
                    <li>Purchase a chord box from our store</li>
                    <li>Start playing!</li>
                </ol>
            </div>
            <div>
                <h2>Contact</h2>
                <p>You can reach us at customersupport@chordbox.com</p>
            </div>
        </div>
      <Footer />
    </>
  );
}