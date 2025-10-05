import Benifit from './Benifit.png'
import Footer from './Footer';

function Products(){
    return(
        <>
        <div className="p-10">
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
                <div className=""><Footer/></div>
        </>
    )
}
export default Products;