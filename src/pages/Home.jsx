import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import Video from "../components/Video";
import Banner from "../components/Banner";
import VolunteerForm from "../components/VolunteerForm";

const Home = () => {
  let images = [
    {
      img: "src/assets/img/rescuer1.jpg",
      user: "Olivia Davis",
      title: "Max and His Happy Family",
      subtitle:
        "When we found Max, he was shy and scared. Now, he's the heart of our family, bringing joy and laughter every day. Thanks to PawsPedia, we couldn't be happier!",
    },
    {
      img: "src/assets/img/rescuer2.jpg",
      user: "John Smith",
      title: "Bella's New Beginning",
      subtitle:
        "Adopting Bella was the best decision we ever made. She's not just a pet, she's family. PawsPedia made the process so easy and we are forever grateful!",
    },
    {
      img: "src/assets/img/rescuer3.jpg",
      user: "Emily Johnson",
      title: "Luna's Transformation",
      subtitle:
        "Before adopting Luna, she was malnourished and anxious. Now, she's a healthy, happy, and confident dog. PawsPedia truly saved her life.",
    },
    {
      img: "src/assets/img/rescuer4.jpg",
      user: "Michael Brown",
      title: "Rocky's Journey",
      subtitle:
        "Thank you, PawsPedia, for helping us find our perfect match. Rocky has filled our home with love and joy. We can't imagine life without him!",
    },
  ];

  let pets = [
    {
      img: "src/assets/img/pet1.jpg",
      name: "Randy",
      desc: "Randy is a charming and affectionate 3-year-old Labrador Retriever mix looking for his forever home. This handsome boy has a heart of gold and a playful spirit that will brighten anyone's day.",
    },
    {
      img: "src/assets/img/pet4.jpg",
      name: "Whiskers",
      desc: "Whiskers is a delightful 2-year-old domestic short-haired cat with a sweet and gentle disposition. She loves to curl up in sunny spots and enjoys gentle petting sessions. Whiskers would be the perfect companion for someone looking for a calm and loving feline friend.",
    },
    {
      img: "src/assets/img/pet7.jpg",
      name: "Charlie",
      desc: "Charlie is an energetic and friendly 1-year-old parakeet with vibrant feathers and a cheerful personality. He loves to sing and mimic sounds, bringing joy to any household. Charlie is looking for a home where he can have plenty of interaction and playtime.",
    },
    {
      img: "src/assets/img/pet8.jpg",
      name: "Bella",
      desc: "Bella is a lovable and curious 4-year-old dwarf rabbit with a soft, velvety coat. She enjoys hopping around and exploring her surroundings. Bella is very social and would thrive in a home where she can receive plenty of attention and affection.",
    },
    {
      img: "src/assets/img/pet9.jpg",
      name: "Spike",
      desc: "Spike is a 5-year-old bearded dragon with a calm and easygoing nature. He loves basking under a warm light and enjoys being handled gently. Spike would be a great pet for someone looking for a unique and low-maintenance reptile companion.",
    },
  ];

  const delayFactor = 0.2;

  return (
    <>
      
      <Hero />
      <Info />
      <section
        className="row justify-content-center gap-3"
        style={{ margin: "250px 0" }}
        >
        {pets.map((pet, index) => (
          <Cards
          key={index}
          img={pet.img}
          title={pet.name}
          desc={pet.desc}
          delayFactor={index * delayFactor}
          />
        ))}
      </section>
      <Video />
      <Banner />
      <Carousel images={images} />
      <VolunteerForm />
    </>
  );
};

export default Home;
