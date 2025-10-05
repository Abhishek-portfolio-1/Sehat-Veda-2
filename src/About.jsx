import Footer from "./Footer";

function About(){
    return(
        <>
        <div className="flex justify-center h-screen p-10">
            <div className="">
           <p className="text-2xl text-[#03441f] font-bold">About Sehat Veda</p>
           <p className="text-lg text-[#03441f]  pt-10">At Sehat Veda, we believe in the healing power of Ayurveda. Our weight gain powder is made from 100% natural herbs, carefully blended to help you gain healthy weight without any side effects. We are committed to offering safe, effective, and affordable wellness solutions backed by ancient Ayurvedic wisdom.

Whether you're underweight due to stress, poor digestion, or metabolism issues — Sehat Veda works from the root to support your overall well-being. Thousands of happy customers trust us for their transformation journey.</p>
<p className="mt-10 text-lg font-bold text-[#03441f]">Made in India | Inspired by Ayurveda | Backed by Science"

</p>
<p className="text-lg font-bold text-[#03441f]">ISO & GMP Certified Manufacturing | No Steroids | No Harmful Chemicals</p>
           </div>
        </div>
        <div className="">
            <Footer/>
        </div>
        </>
    )
}
export default About;