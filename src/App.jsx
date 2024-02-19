import React, { useState, useEffect } from 'react';
import './App.css';
import sound from './assets/music.mp3';
import 'animate.css';
import image1 from './assets/img3.jpg'
import image2 from './assets/img2.jpg'
import image3 from './assets/img1.jpg'
import image4 from './assets/img4.jpg'
import image5 from './assets/img5.jpg'
import groom from './assets/groom.jpg'
import image7 from './assets/img7.jpg'
import image9 from './assets/img9.jpg'
import image10 from './assets/img10.jpg'





function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const backgroundStyle = {
    background: `url('https://st2.depositphotos.com/1036506/9073/i/950/depositphotos_90736754-stock-photo-wedding-invitation-card-design.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

  };

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(23,112,126)] text-white relative overflow-hidden">
      <div className="text-center mb-8 relative z-10 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold mb-4 mt-5">Engagement Celebration</h1>
        <p className="text-xl mb-4">Love is not just a verb; it’s you looking at each other!</p>

        <button
          className="bg-white text-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded animate__animated animate__fadeIn"
          onClick={play}
        >
          Send Your Wishes
        </button>
      </div>

      <div className="heart-shape-container">
  <div className=" p-8 rounded heart-shape shadow-md w-[75vw] text-black relative z-20 animate__animated animate__fadeIn" style={backgroundStyle}>
    <h2 className="text-4xl font-bold mb-6 text-purple-800">Join Us for the Celebration!</h2>
    <p className="mb-4 font-bold text-[rgb(86,40,37)]">
      "Two hearts that beat as one." Let's come together and celebrate this
      beautiful journey of love and commitment.
    </p>
    <p className="mb-4 font-semibold from-neutral-950 text-[rgb(86,40,37)] text-base">
      We are thrilled to invite you to the joyous occasion of the engagement of
    </p>

    <div className="circle-container top-1/2 left-1/2  flex justify-center">
    <img
      src={image1} // Replace with the actual bride's photo URL
      alt="Bride's Photo"
      className="h-32 w-32 object-cover rounded-full border-4 border-white shadow-md "
    />
    <img
      src={image4} // Replace with the actual bridegroom's photo URL
      alt="Bridegroom's Photo"
      className="h-32 w-32 object-cover rounded-full border-4 border-white shadow-md ml-4"
    />
  </div>

    
    <p className="text-lg font-bold mb-4 text-teal-800">
      Chinmayee Mishra (Chinu) & Abhisek Mishra (Dishu)
    </p>
   
    <p className="mb-4">
      <span className="font-semibold text-[rgb(52,22,153)]">Date:-</span>
       <span className='text-[rgb(86,40,37)] font-bold'>  25th February, 2024 </span>
    </p>
    <p className="mb-4">
      <span className="font-semibold text-[rgb(52,22,153)]">Time:-</span> 
      <span className='text-[rgb(86,40,37)] font-semibold'> Eleven o'clock in the morning (11:00 AM )</span>

    </p>
    <p className="mb-4 text-[rgb(86,40,37)] font-semibold">
      <span className="font-semibold text-[rgb(52,22,153)]">Venue:-</span> Hotel Sutrupati, Unit 4, Bhubaneswar, Odisha 751001
    </p>
    <p className="mb-4 font-bold text-[rgb(86,40,37)]">
      Your presence will make this day even more special, filled with love and
      laughter!
    </p>
    <div className="text-3xl mb-4 pt-6 text-[rgba(149,15,0,0.79)] animate__animated animate__fadeIn">
      {days} days {hours} hours {minutes} minutes {seconds} seconds
    </div>
  </div>
</div>


      <div className="image-container mb-8 mt-5 animate__animated animate__fadeIn">
        <img
          src="https://media.istockphoto.com/id/1434652920/photo/newlyweds-put-wedding-rings-on-their-finger-close-up.jpg?s=612x612&w=0&k=20&c=Ycns-hDBoDQXanehIrOvTrD8OMEnFWzNSvJoNNoGoOI="
          alt=""
          className="h-[80vh] w-[75vw] object-cover rounded-md shadow-lg"
        />
      </div>

      <div className="photo-album-container w-[75vw]">
        <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">Photo Album</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-7">
            <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={image2}  // Replace with actual photo URLs
                alt={`Bride's Photo`}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className='text-[red]'>Smiling in Solitude.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={image7}  // Replace with actual photo URLs
                alt={`Bride's Photo`}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className='text-[red]'>Blessed Moments at Kedarnath Temple.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={image3}  // Replace with actual photo URLs
                alt={`Bride's Photo`}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className='text-[red]'>A Snapshot of Pure Happiness.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={groom}  // Replace with actual photo URLs
                alt={`Bride's Photo`}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className='text-[red]'>Cherished moments side by side.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={image5}  // Replace with actual photo URLs
                alt={`Bride's Photo`}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className='text-[red]'>Shared smiles, creating beautiful memories.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={image4}  // Replace with actual photo URLs
                alt={`Bride's Photo`}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className='text-[red]'>A Boy's Moment.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={image9}  // Replace with actual photo URLs
                alt={`Bride's Photo`}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className='text-[red]'>In the Glowing Night.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md animate__animated animate__fadeIn">
              <img
                src={image10}  // Replace with actual photo URLs
                alt={`Bride's Photo`}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className='text-[red]'>The Groom's Smile.</p>
              </div>
            </div>

            
        </div>
      </div>
      <footer className="bg-[rgb(69,124,196)] text-white p-8 mt-auto w-full text-center">
    <div className="text-4xl font-extrabold mb-4">Contact Us</div>
    <div className='text-lg font-medium'>
        <p className='mb-2'>Phone 1: <a href="tel:+11234567890" className="text-yellow-300 hover:underline">+91 890-498-4380</a></p>
        <p className='mb-2'>Phone 2: <a href="tel:+11234567890" className="text-yellow-300 hover:underline">+91 981-967-2456</a></p>
        <p className='mb-2'>Address: <a className="text-yellow-300 hover:underline">Plot No.6, Chhaya Complex, Unit 4 Main St, AG Colony, Unit 4, Bhouma Nagar, Bhubaneswar, Odisha 751001 </a> </p>        <p className='mt-4 text-black'>&copy; {new Date().getFullYear()} Puja Mishra. All rights reserved.</p>

    </div>
</footer>

    </div>
  );
}

export default App;
