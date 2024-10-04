import abstract from "../../../src/assets/icons/Abstract Design.svg";
import linkedin from "../../../src/assets/icons/social Media/linkedin.svg";
import facebook from "../../../src/assets/icons/social Media/facebook.svg";
import twitter from "../../../src/assets/icons/social Media/twitter.svg";
import github from "../../../src/assets/icons/social Media/github.svg";



const TeamCard = () => {
  // #60a5fa

  const teamMembers = [
    {
      name: "Rahul Sutradhar",
      title: "Frontend Developer",
      brief: "Skilled Frontend Developer passionate about user-friendly web apps and open-source contributions.",
      socialMedia: [
        {
          icon: linkedin,
          url: "https://www.linkedin.com/in/rahul-sutradhar-a99749202/"
        },
        {
          icon: facebook,
          url: "https://www.facebook.com/rahulsd836"
        },
        {
          icon: twitter,
          url: ""
        },
        {
          icon: github,
          url: "https://github.com/rahulsd380"
        }
      ]
    },
    {
      name: "Abdullah Al Ovi",
      title: "Fullstack Developer",
      brief: "Experienced Fullstack Developer proficient in both frontend and backend technologies.",
      socialMedia: [
        {
          icon: linkedin,
          url: ""
        },
        {
          icon: facebook,
          url: ""
        },
        {
          icon: twitter,
          url: ""
        },
        {
          icon: github,
          url: ""
        }
      ]
    },
    {
      name: "Polash Ahmed",
      title: "Frontend Developer",
      brief: "Passionate Frontend Developer with a focus on creating elegant and efficient user interfaces.",
      socialMedia: [
        {
          icon: linkedin,
          url: ""
        },
        {
          icon: facebook,
          url: ""
        },
        {
          icon: twitter,
          url: ""
        },
        {
          icon: github,
          url: ""
        }
      ]
    }
  ];
  
    return (
       <div className="flex justify-center">
         <div className="mt-10 font-Outfit flex flex-wrap gap-16 justify-center">
          {
            teamMembers.map((member, index) => 
              <div key={index} className="bg-blue-900 bg-opacity-60 p-7 rounded-3xl flex flex-col justify-center items-center max-w-[300px] relative hover:bg-gradient-to-r from-blue-900 to-indigo-950 transition duration-300">
            <img className="absolute top-0 w-full" src={abstract} alt="" />
  
            <div className="w-32 h-32 rounded-full bg-blue-900 flex justify-center items-center">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" className="w-full rounded-full" />
            </div>
  
            
            <h1 className="text-bodytext font-bold text-xl text-center text-balance capitalize mt-5">
              {member?.name}
            </h1>
  
            <p className="text-bodytext text-center font-normal text-sm mt-[2px]">
              {member?.title}
            </p>
            <div className="w-[80%] mx-auto h-[1px] bg-blue-500 mt-3"></div>
  
            <p className="text-bodytext/80 text-center text-sm mt-2">
            {member?.brief}
  
            </p>
  
            <div className="flex items-center gap-9 mt-8">
              {
                member.socialMedia.map((socialMedia, index) => 
                 <a key={index} href={socialMedia.url} target="_blank" className="w-10 h-10 rounded-full">
                  <img className="w-6 cursor-pointer transition duration-300 transform hover:-translate-y-0.5" src={socialMedia?.icon} alt="" />
                 </a>
                )
              }
            </div>
          </div>
            )
          }
        </div>
       </div>
    );
};

export default TeamCard;