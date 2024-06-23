import TeamMemberCard from './TeamMemberCard';


const members = [
  {
    name: "Utkarsh Rai",
    role: "Founder",
    image: "/assets/Utkarsh.webp",
  },
  {
    name: "Vikash Saxena",
    role: "Co-Founder",
    image: "/assets/Vikash.jpeg",
  },
  {
    name: "Ankur Srivastava",
    role: "Co-Founder",
    image: "/assets/AnkySri.jpg",
  },
  {
    name:"Himanshu K. Mahto",
    role:"Co-Founder",
    image:"/assets/himanshumahto.jpg"
  },
  {
    name: "Ashutosh Mishra",
    role: "Co-Founder",
    image: "/assets/WhatsApp Image 2024-04-30 at 9.09.37 PM.jpeg",
  },
  {
    name:"Vansh Verma",
    role:"Full Stack Web Developer",
    image:"/assets/WhatsApp Image 2024-04-28 at 10.29.41 AM.jpeg"
  }
];

const Team = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="team">
      {members.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          imageUrl={member.image}
        />
      ))}
    </div>
  );
};
export default Team

