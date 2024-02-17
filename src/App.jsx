import React, { useState, useEffect } from 'react';
import './App.css';
import sound from './assets/music.mp3';
import 'animate.css';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [value, setValue] = useState("");

  function play() {
    new Audio(sound).play();
  }

  useEffect(() => {
    // Countdown logic
    const engagementDate = new Date('2024-02-25T12:00:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = engagementDate - now;

      setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeDifference % (1000 * 60)) / 1000));
    };

    const interval = setInterval(updateCountdown, 1000);

    // Clean up interval when component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

 

 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(69,124,196)] text-white relative overflow-hidden">
      <div className="text-center mb-8 relative z-10 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold mb-4">Engagement Celebration</h1>
        <p className="text-xl mb-4">Love is not just a verb; it’s you looking at each other!</p>

        <button
          className="bg-white text-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded animate__animated animate__fadeIn"
          onClick={play}
        >
          Send Your Wishes
        </button>
      </div>

      <div className="heart-shape-container">
  <div className="bg-white p-8 rounded heart-shape shadow-md w-[75vw] text-black relative z-20 animate__animated animate__fadeIn">
    <h2 className="text-4xl font-bold mb-6 text-purple-800">Join Us for the Celebration!</h2>
    <p className="mb-4">
      We are thrilled to invite you to the joyous occasion of the engagement of
    </p>

    <div className="circle-container top-1/2 left-1/2  flex justify-center">
    <img
      src="https://randomuser.me/api/portraits/women/43.jpg" // Replace with the actual bride's photo URL
      alt="Bride's Photo"
      className="h-32 w-32 object-cover rounded-full border-4 border-white shadow-md "
    />
    <img
      src="https://randomuser.me/api/portraits/men/86.jpg" // Replace with the actual bridegroom's photo URL
      alt="Bridegroom's Photo"
      className="h-32 w-32 object-cover rounded-full border-4 border-white shadow-md ml-4"
    />
  </div>

    
    <p className="text-lg font-bold mb-4 text-teal-800">
      Chinmaya Mishra & Abhishek Mishra
    </p>
    <p className="mb-4">
      "Two hearts that beat as one." Let's come together and celebrate this
      beautiful journey of love and commitment.
    </p>
    <p className="mb-4">
      <span className="font-semibold text-indigo-800">Date:</span> Feb 25, 2024
    </p>
    <p className="mb-4">
      <span className="font-semibold text-indigo-800">Time:</span> 11:00 AM
    </p>
    <p className="mb-4">
      <span className="font-semibold text-indigo-800">Venue:</span> [Venue Name]
    </p>
    <p className="mb-4">
      Your presence will make this day even more special, filled with love and
      laughter!
    </p>
    <div className="text-3xl mb-4 text-red-600 animate__animated animate__fadeIn">
      {days} days {hours} hours {minutes} minutes {seconds} seconds
    </div>
  </div>
</div>


      <div className="image-container mb-8 mt-5 animate__animated animate__fadeIn">
        <img
          src="https://www.theknot.com/tk-media/images/9019bea7-4766-4822-ab2a-3eee5bab64d4"
          alt=""
          className="h-[80vh] w-[75vw] object-cover rounded-md shadow-lg"
        />
      </div>

      <div className="photo-album-container w-[75vw]">
        <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">Bride's Photo Album</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={`https://placekitten.com/30${index}/20${index}`}  // Replace with actual photo URLs
                alt={`Bride's Photo ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-bold mb-2">Photo {index + 1}</p>
                <p className='text-[red]'>Beautiful moments with the bride.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-[rgb(69,124,196)] text-white p-8 mt-auto w-full text-center">
    <div className="text-4xl font-extrabold mb-4">Contact Us</div>
    <div className='text-lg font-medium'>
        <p className='mb-2'>Email: <a href="mailto:engagement@example.com" className="text-yellow-300 hover:underline">engagement@example.com</a></p>
        <p className='mb-2'>Phone 1: <a href="tel:+11234567890" className="text-yellow-300 hover:underline">+1 123-456-7890</a></p>
        <p className='mb-2'>Phone 2: <a href="tel:+11234567890" className="text-yellow-300 hover:underline">+1 123-456-7890</a></p>
        <p className='mb-2'>Address: 123 Love Lane, Cityville</p>        <p className='mt-4'>&copy; {new Date().getFullYear()} Puja Mishra. All rights reserved.</p>

    </div>
</footer>

    </div>
  );
}

export default App;
