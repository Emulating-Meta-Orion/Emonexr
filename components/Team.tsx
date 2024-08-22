import TeamMemberCard from './TeamMemberCard';


const members = [
  {
    name: "Utkarsh Rai",
    role: "Founder",
    image: "/assets/ut.jpeg",
  },
  {
    name: "Ashutosh Mishra",
    role: "Co-Founder",
    image: "/assets/WhatsApp Image 2024-04-30 at 9.09.37 PM.jpeg",
  },
  {
    name: "Himasnshu Mahto",
    role: "Co-Founder",
    image: "/assets/himanshumahato.jpg",
  },
  {
    name:"Vansh Verma",
    role:"Web(Founding Engineer)",
    image:"/assets/WhatsApp Image 2024-04-28 at 10.29.41 AM.jpeg"
  },
  {
    name: "Vikash Saxena",
    role: "Unity(Founding Engineer)",
    image: "/assets/Vikash.jpeg",
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

