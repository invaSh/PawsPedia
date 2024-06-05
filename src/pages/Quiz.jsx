import React from 'react'
import QuizCard from "../components/QuizCard"
import { Container, Row, Col, Button } from "react-bootstrap";


const questions = [
    {
      desc: "How much time can you dedicate to a pet on a scale of 1 to 5?",
      1 : "Limited Time (1)",
      2: "Moderate Time (2)",
      3: "Average Time (3)",
      4: "Ample Time (4)",
      5: "Extensive Time (5)",
    },
    {
      desc: "How active do you prefer your pet to be on a scale of 1 to 5?",
      1: "Low Activity (1)",
      2: "Moderate Activity (2)",
      3: "Average Activity (3)",
      4: "Good Activity (4)",
      5: "High Activity (5)",
    },
    {
      desc: "How much space do you have for a pet on a scale of 1 to 5?",
      1: "Limited Space (1)",
      2: "Moderate Space (2)",
      3: "Average Space (3)",
      4: "Ample Space (4)",
      5: "Extensive Space (5)",
    },
    {
      desc: "How important is pet hair shedding to you on a scale of 1 to 5",
      1: "It is a major concern (1)",
      2: "It is somewhat bothersome (2)",
      3: "It is not a significant issue (3)",
      4: "It is tolerable (4)",
      5: "It is not a concern (5)",

    },
    {
      desc: "How often do you prefer to travel on a scale of 1 to 5",
      1: "Rarely Travel (1)",
      2: "Infrequent Traveler (2)",
      3: "Moderate Traveler (3)",
      4: "Occasional Traveler (4)",
      5: "Frequent Traveler (5)",
    },
    {
      desc: "How patient are you with training a pet on a scale of 1 to 5",
      1: "Limited patience (1)",
      2: "Moderate patience (2)",
      3: "Average patience (3)",
      4: "High patience (4)",
      5: "Extensive patience (5)",
    },
    {
      desc:"How much noise can you tolerate from a pet on a scale of 1 to 5",
      1: "Quiet Environment Needed (1)",
      2: "Moderate Noise Tolerance (2)",
      3: "Average Environment Tolerance (3)",
      4: "High Environment Tolerance (4)",
      5: "Very High Environment Tolerance (5)",
    },
    {
      desc: "How often do you prefer to groom a pet on a scale of 1 to 5",
      1: "Minimal Grooming Needed (1)",
      2: "Occasional Grooming (2)",
      3: "Average Grooming Needs (3)",
      4: "Frequent Grooming (4)",
      5: "Extensive Grooming Needs (5)",
    },
    {
      desc: "How much do you enjoy playing with a pet on a scale of 1 to 5",
      1: "Limited Play Interest (1)",
      2: "Occasional Playtime (2)",
      3: "Average Playtime (3)",
      4: "High Play Interest (4)",
      5: "Love Playing with Pets (5)",
    },
    {
      desc: "How much are you willing to spend on a pet on a scale of 1 to 5",
      1 : "Limited Budget (1)",
      2 : "Moderate Budget (2)",
      3 : "Average Budget (3)",
      4 : "Ample Budget (4)",
      5 : "Significant Budget (5)",

    }
]

const answers = [
    { 1: "Dog Lover: This user loves and cares for dogs. They might enjoy an active lifestyle and have a strong bond with their pets." },
    { 2: "Cat Connoisseur: This user is calm, independent, and prefers a more relaxed atmosphere. They might appreciate the company of a cat." },
    { 3: "Exotic Pet Enthusiast: This user is open to unique and diverse pet options, showing curiosity and a love for the unconventional." },
    { 4: "Reptile Friend: This user is responsible, patient, and enjoys quiet companionship. They might be well-suited for a reptile or amphibian pet." },
    { 5: "Bird Buddy: This user enjoys having a lively and social pet around. They might be active and enjoy having a companion that can interact with them." },
    { 6: "Aquatic Companion: This user might be calm, patient, and enjoy a quiet, peaceful environment. They might be interested in getting a pet fish or aquatic creature." },
    { 7: "Farm-style Friend: This user might enjoy having a variety of animals around, like chickens, goats, or other farm animals. They might be interested in a more rural lifestyle." },
    { 8: "Small Animal Savant: This user might prefer smaller pets, such as hamsters, guinea pigs, or rabbits. They might enjoy taking care of their pets' needs and creating a cozy environment for them." },
    { 9: "Active Pet Parent: This user might prefer a high-energy pet, like a horse or a large dog. They might be into outdoor activities and sports." },
    { 10: "Exotic Pet Explorer: This user might be interested in more unusual pets, like a tarantula, a sugar glider, or a hedgehog. They might be adventurous and open-minded." },
]

const Quiz = () => {
  return (
    <Row className="justify-content-center text-dark">
      <Col lg={8}>
        <QuizCard />
      </Col>
    </Row>
  )
}

export default Quiz
