import React from "react";

const Feature = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center p-9 space-y-4 px-4">
    <img src={image} alt={title} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
    <h3 className="text-lg md:text-xl font-bold text-secondary">{title}</h3>
    <p className="text-gray-700 text-sm md:text-base">{description}</p>
  </div>
);

const Display = ({ image, title1, title2 }) => (
  <div className="relative w-full">
    <img
      src={image}
      alt={title1}
      className="w-full h-auto object-contain rounded-xl"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
      <h3 className="text-4xl md:text-5xl font-bold text-white">{title1}</h3>
      <h3 className="text-4xl md:text-5xl font-semibold text-white">{title2}</h3>
    </div>
  </div>
);


const ProductCard = ({ image, title, description, price }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-40 md:h-48 object-cover" />
    <div className="p-4 space-y-2 text-center">
      <h3 className="text-lg md:text-xl font-semibold text-secondary">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
      <p className="text-lg font-bold text-primary">${price}</p>
    </div>
  </div>
);

const Testimonial = ({ quote, author, role }) => (
  <div className="bg-[#f9f9f7] p-9 rounded-md shadow-md text-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <p className="text-base md:text-lg italic text-gray-700">"{quote}"</p>
    <h4 className="mt-4 font-semibold text-secondary">{author}</h4>
    <p className="text-gray-500 text-sm">{role}</p>
  </div>
);

const Imagefile = () => {
  return (
    <section className="space-y-16">
      <div className="container mx-auto text-center pb-20 md:pb-40">
        <Display
          image="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/yum.png"
          title1="Yum, Yum, Yum 😋"
          title2="Best cookies ever 🍪"
        />
      </div>
      <div className="relative bg-[#e9e6dd] pb-20" id = "about">
        <div className="container mx-auto px-4 md:px-8 text-center py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">
            Why Choose Our Cookies?
          </h2>
          <div className="flex flex-wrap justify-center">
            <Feature
              image="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/icon-1.png"
              title="Freshly Baked"
              description="Your cookies are baked fresh to order."
            />
            <Feature
              image="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/icon-2.png"
              title="High-Quality Ingredients"
              description="We use only the finest ingredients for our cookies."
            />
            <Feature
              image="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/icon-3.png"
              title="Customizable Gifts"
              description="Perfect for personal or corporate gifting."
            />
          </div>
        </div>
        <div className=" absolute  z-10 w-60 h-60 right-2 ">
          <img src="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/cookie.svg"/> 
        </div>
        <div className="absolute lg:-bottom-32 md:-bottom-28 sm: -bottom-24 left-0 w-full ">
          <svg  viewBox="0 0 1440 490"
            className="w-full h-[100px] md:h-[150px] transform translate-y-0  rotate-180 "
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
              <path  
                fill="#e9e6dd" 
                d="M0,441L26.7,375.7C53.3,310,107,180,160,114.3C213.3,49,267,49,320,81.7C373.3,114,427,180,480,
                  204.2C533.3,229,587,212,640,236.8C693.3,261,747,327,800,343C853.3,359,907,327,960,294C1013.3,
                  261,1067,229,1120,245C1173.3,261,1227,327,1280,367.5C1333.3,408,1387,425,1440,375.7C1493.3,327,
                  1547,212,1600,196C1653.3,180,1707,261,1760,310.3C1813.3,359,1867,376,1920,326.7C1973.3,278,2027,
                  163,2080,98C2133.3,33,2187,16,2240,81.7C2293.3,147,2347,294,2400,318.5C2453.3,343,2507,245,2560,
                  245C2613.3,245,2667,343,2720,326.7C2773.3,310,2827,180,2880,130.7C2933.3,82,2987,114,3040,122.5C3093.3,
                  131,3147,114,3200,106.2C3253.3,98,3307,98,3360,138.8C3413.3,180,3467,261,3520,285.8C3573.3,310,3627,278,3680,
                  236.8C3733.3,196,3787,147,3813,122.5L3840,98L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,
                  490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,
                  2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,
                  490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,
                  490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,
                  1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,
                  490,213,490,160,490C106.7,490,53,490,27,490L0,490Z">
            </path>
          </svg>
        </div>
      </div>
      <div className="container mx-auto px-4  md:px-8" id = "best">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-8 mt-44 ">Our Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard image="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/choco.jpg" title="Chocolate Cookie" description="A delightful selection of our gourmet cookies." price="25.00" />
          <ProductCard image="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/gingersnap.jpg" title="Ginger Snap" description="Rich and decadent chocolate cookies." price="30.00" />
          <ProductCard image="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/oatmeal.jpg" title="OatMeal" description="A variety of our best cookies." price="28.00" />
          <ProductCard image="https://rajasreesingamshetty5geetha.github.io/Assests-web/images/cookie.jpeg" title="Almond Cookies" description="A variety of our best cookies." price="28.00"  />
        </div>
      </div>

      <div className="bg-[#e9e6dd] py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial quote="The cookies were absolutely amazing, and the packaging was so beautiful!" author="Emily R." role="Happy Customer" />
            <Testimonial quote="These cookies were the perfect corporate gift for our clients." author="Michael S." role="Business Owner" />
            <Testimonial quote="I couldn't believe how fresh and delicious the cookies were. Highly recommend!" author="Sarah T." role="Food Blogger" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imagefile;
