import "./FamilyParticipants.scss";
import BabyCard from "../../components/BabyCard/BabyCard";

function FamilyParticipants({ family }) {
  // SIMPLE DATA PARA ITERAR INTEGRANTES DE UN GRUPO DE FAMILIA.
  const FernandezFamily = [
    {
      id: 1,
      name: "Roberto Fernández",
      image: "https://picsum.photos/200/300",
      baby: false,
    },
    {
      id: 2,
      name: "Sandy Mey Zuleta",
      image: "https://picsum.photos/200/300",
      baby: false,
    },
    {
      id: 3,
      name: "Alan Luciano",
      age: 22,
      image: "https://picsum.photos/200/300",
      baby: true,
    },
  ];

  return (
    <>
      <h2 className="familyParticipants__title">{family}</h2>
      {FernandezFamily?.map((member) => {
        return member.baby === true ? (
          <BabyCard age={member.age} image={member.image} memberName={member.name} key={member.id} />
        ) : null;
      })}
    </>
  );
}

export default FamilyParticipants;
