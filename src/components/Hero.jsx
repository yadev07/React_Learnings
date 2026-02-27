import React from 'react'
import Card from './Card'

const Hero = () => {

    const users = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "age": 24,
    "city": "Delhi",
    "profession": "Frontend Developer",
    "profilePhoto": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
  }, 
  {
    "id": 2,
    "name": "Ishita Verma",
    "age": 22,
    "city": "Mumbai",
    "profession": "UI/UX Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "id": 3,
    "name": "Rohan Mehta",
    "age": 26,
    "city": "Bangalore",
    "profession": "Backend Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 4,
    "name": "Sneha Kapoor",
    "age": 23,
    "city": "Jaipur",
    "profession": "Data Analyst",
    "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 5,
    "name": "Aditya Singh",
    "age": 25,
    "city": "Lucknow",
    "profession": "Full Stack Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
  }
]

  return (
    <>
        <div className='flex flex-wrap'>
            {users.map(function(elem){
                return <Card key={elem.id} name={elem.name} age={elem.age} city={elem.city} prof={elem.profession} profile={elem.profilePhoto}/>
            })}
        </div>
    </>
  )
}

export default Hero