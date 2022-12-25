import React from "react";
import "./Blog.css";
import { IoPaperPlane } from "react-icons/io5";
import blogFirst from "./firstPic.png";
import blogSecond from "./secondPic.png";
import blogThird from "./thirdPic.png";
// import { Link } from "react-router-dom";



export default function Blog() {
  return (
<div className="blogDiv flex flex-col my-16 mx-24 ">

<img src={blogFirst} alt="reading"  className="place-self-center"/>


<h1 className="titleOne pt-12 pb-3">Mental Health and Technology</h1>
<p className="py-2 mr-6 text-slate-900">Technology and mental well-being might seem like profoundly antagonistic terms.
   However, there are excellent digital tools to help you reach mindfulness and 
   to practice meditation. You can even use smartphone apps, virtual reality solutions 
   and digital devices as a form of relieving stressing and achieving digital detox – 
   as, after a while, you will be able to practice all types of anti-anxiety skills on 
   your own. So, let The Medical Futurist show you how you 
  can enhance your mental and emotional health with the help of technology.</p>
  <p className="titleTwo pt-12 pb-3 mr-6">The need for taking care of our emotional health</p>
  <p className="py-2 text-slate-900">
  “Just as we observe physical hygiene to stay well, we need to cultivate a kind of emotional 
  hygiene too,” wrote the Dalai Lama on his Twitter-feed. There are three crucial points around 
  His Holiness’ statement. First and foremost, the popularity of health-enhancing, physically 
  active lifestyle is soaring worldwide. Nevertheless, there’s always room for improvement: the 
  WHO says that globally, 23 percent of adults and 81 percent of school-going adolescents 
  are not active enough. According to the organization, adults aged 18-64 should do at least 
  150 minutes of moderately intense physical activity each week, which is not unaccomplishable. 
  Moreover, the numerically and statistically driven 21st-century mind could take a great 
  inspiration and power from the various fitness trackers and wearables.
  </p>
  <p className="py-2 mr-6 text-slate-900">
  Secondly, emotional hygiene seems to be thrown into the shade nowadays. Somehow, the 
  culture of busyness prevents us from squeezing some time for mental health into our packed 
  schedules. Information is pouring on us from millions of communication channels; we are 
  connecting with hundreds of ‘friends’ on social media, we are obsessed with data due to the 
  fear of missing out and time management slices up our days into meetings and to-do-lists.
  </p>
  <p className="py-2 mr-6 text-slate-900">
  The pressure to perform and the stress to achieve is the air every busy-bee is breathing. 
  However, turbulent lifestyle comes with a price. No wonder so many people have mental 
  health issues. In the US, that means one in five adults – more than 40 million Americans! On the 
  old continent, 27 percent of the population has to cope with mental disorders, which means 
  83 million struggling Europeans. In Asia, the prevalence of depression is 20 percent in Thailand, 
  19.9 percent in Taiwan, 19.4 percent in Korea, 17.5 in Malaysia and 16.5 percent in China.
  </p>
<p className="titleThree pt-10">Sign up for The Healing blog</p>
<p>A weekly, ad-free Blog that helps you stay in the know</p>

<div className="search flex items-center justify-between">
          <input
            type="text"
            placeholder="Enter Your e-mail"
            className=" searchh "
          />
          <button type="button"
            className="btn duration-300 px-5 py-2.5 font-[Poppins]
            text-black md:w-auto "
          >
        <IoPaperPlane />
          </button>
        </div>
<p className="titleThree pt-32">Recommended For you</p>


    
<div className="flex flex-row justify-end my-8">
<img src={blogSecond} alt="puzzle" />
<img src={blogThird} alt="overthinking" />
</div>
</div>

       )}