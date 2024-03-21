import { Header } from './Header';
import { Footer } from './Footer';

export function Contact() {
  return (
    <>
      <Header />      
        <div>
            <h1>Contact Us</h1>
            <div>
                <h2>Address</h2>
                <p>University of Limerick, Castletroy, Limerick, Ireland</p>
            </div>
            <div>
                <h2>Phone</h2>
                <p>+1 123-456-7890</p>
            </div>
            <div>
                <h2>Email</h2>
                <p>Contact us at customerservice@chordbox.com</p>
            </div>
        </div>
      <Footer />
    </>
  );
}
