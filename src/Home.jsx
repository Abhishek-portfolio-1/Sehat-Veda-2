import { useState, useRef } from 'react';
import './App.css';
import Video from './Video.mp4';
import Google from './google.png';
import Verified from './Verified.png'
import Poster from './Sehatposter.png';
import Benifit from './Benifit.png'
import ReviewSlider from './Review';
import Footer from './Footer';


function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <>
      <div className="container p-10   ">
        <div className="flex justify-center  flex-wrap gap-10 items-center">
        
        <div className="border-3  border-[#03441f] md:size-120 relative w-full">
          {!isPlaying && (
            <div className="relative cursor-pointer" onClick={handlePlay}>
             
              
                 <img
                src={Poster}
                alt="Video Poster"
                className="w-full h-auto object-cover"
              />
              </div>
            
          )}

          <video
            ref={videoRef}
            className={`w-full ${isPlaying ? 'block' : 'hidden'}`}
            controls
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid justify-center gap-3 ">
          <div className="text-center ">
           <p className="text-[#03441f] text-3xl  font-bold md:text-4xl">100% <span className="text-[#017b20]"> Ayurvedic</span> Weight Gain Formula</p>
          </div>
          <div className="flex justify-center">
           <p className="flex items-center border-b border-gray-400 p-2 text-3xl font-sans font-bold gap-2"><img src={Google} alt="" className="size-8" /> 4.9 ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="flex justify-center text-[#03441f]">
            <p className="text-xl font-bold  p-1 border-b border-gray-400">Cash on Delivery ! Available ! 3% Part Payment </p>
          </div>
          <div className="grid justify-center text-[#03441f] gap-4">
           <p className="text-3xl text-center font-sans font-bold ">₹1,499</p>
          
          <p className="bg-[#03441f] text-white font-bold font-sans text-xl p-2 w-50 rounded-lg text-center animate-bounce hover:scale-110 hover:bg-[#046a2f] transition-transform duration-300 ease-in-out cursor-pointer">
            <a href="https://forms.gle/kMtj5ujiHu5XzVMC7" className="">
  Buy Now</a>
</p></div>
<div className="grid justify-center">
<p className="flex items-center font-bold text-2xl font-sans text-[#03441f]"> <img src={Verified} alt="" className="size-8" />1000 + Reviews  </p></div>

        </div>
        </div>
        <div className="grid gap-10 mt-10">
        <div className="text-center bg-[#F6FBF4] text-[#03441f] p-10 grid gap-5">
          <p className="text-4xl font-bold">What is Sehat Veda? </p>
          <p className="font-bold text-lg">Sehat Veda is a 100% Ayurvedic weight gain powder made from natural herbs that helps improve digestion, boost appetite, and support healthy weight and muscle gain without any side effects.</p>
        </div>
        <div className="text-center bg-[#F6FBF4] text-[#03441f] p-10 grid gap-5">
          <p className="text-4xl font-bold"> Sehat Veda kya hai? </p>
          <p className="font-bold text-lg">Sehat Veda ek 100% आयुर्वेदिक वेट गेन पाउडर है जो प्राकृतिक जड़ी-बूटियों से बना है। यह पाचन को बेहतर करता है, भूख बढ़ाता है और बिना किसी साइड इफेक्ट के वजन और मांसपेशियों को स्वस्थ तरीके से बढ़ाने में मदद करता है।</p>
        </div>
        <div className="grid justify-center  gap-4">
          
          
          <p className="bg-[#03441f] text-white font-bold font-sans text-xl p-2 w-50 rounded-lg text-center animate-bounce hover:scale-110 hover:bg-[#046a2f] transition-transform duration-300 ease-in-out cursor-pointer">
            <a href="https://forms.gle/kMtj5ujiHu5XzVMC7" className="">
  Buy Now</a>
</p></div>
        <div className="flex justify-center flex-wrap gap-10 items-center">
          <div className="bg-[#f6fbf4] grid gap-4 p-10 rounded-lg">
          <img src={Benifit} alt="" className="w-100" />
          <div className=" flex justify-center">
          <p className="bg-[#03441f] text-white font-bold font-sans text-xl p-2 w-50 rounded-lg text-center animate-bounce hover:scale-110 hover:bg-[#046a2f] transition-transform duration-300 ease-in-out cursor-pointer">
            <a href="https://forms.gle/kMtj5ujiHu5XzVMC7" className="">
  Buy Now</a>
</p>
</div>
          
          
          </div>
          <div className="text-2xl font-bold grid gap-5 bg-[#f6fbf4] text-[#03441f] p-10 rounded-lg"><p className=""></p>
          <p className="">✓ भूख को बढ़ाता है</p>
          <p className="">✓ स्वस्थ वजन और मांसपेशियों की वृद्धि</p>
          <p className="">✓ पाचन तंत्र को मजबूत बनाता है</p>
          <p className="">✓ 100% प्राकृतिक और आयुर्वेदिक</p>
          <p className="">✓ ऊर्जा और सहनशक्ति बढ़ाता है</p>
          <p className="">✓ तनाव को कम करता है और नींद सुधारता है</p>
          <p className="">✓  पुरुषों, महिलाओं और किशोरों के लिए उपयुक्त</p>
          <div className="flex justify-center mt-5">
          <p className="bg-[#03441f] text-white font-bold font-sans text-xl p-2 w-50 rounded-lg text-center animate-bounce hover:scale-110 hover:bg-[#046a2f] transition-transform duration-300 ease-in-out cursor-pointer">
            <a href="https://forms.gle/kMtj5ujiHu5XzVMC7" className="">
  Buy Now</a>
</p></div>
          </div>
        </div>
        </div>
        <div className="">
       <ReviewSlider/>
       </div>
       

      </div>
      <div className="">
        <Footer/>
       </div>
    </>
  );
}

export default Home;
