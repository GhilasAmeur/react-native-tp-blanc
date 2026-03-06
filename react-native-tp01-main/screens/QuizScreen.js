import { Text, View, Alert } from "react-native"
import { ButtonCustom, ScreenWrapper } from "../components"
import { useState } from "react";
import data from '../data/data.json'
import { Tittle } from "../components/Tittle";
export const QuizScreen = ({navigation, route}) =>{
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState(1)
    const [reponse, setReponse] = useState("")
   // const [time, setTime] = useState(null)
    const [compteur, setCompteur] = useState(0)
    const prenom = route.params
    const lesReponses = [
      
         "Paris",
         "Océan Pacifique",
         "Au",
         "7",
         "Victor Hugo"
      
    ];

const pageSuivante = () => {
   
console.log(prenom)
  if (reponse === lesReponses[compteur] ) {
    setScore(score + 1);
  }

  if (compteur  === data.length - 1) {

    Alert.alert("Titre",  prenom +  " vous avez obtenu " + score +"/" +5, [
      // {
      //   text: "Annuler",
      //   onPress: () => console.log("Annulé"),
      //   style: "cancel",
      // },
      {
        text: "VOIR LES RÉSULTATS",

         onPress : () => {navigation.navigate("Resultat")}
         

      },
    ]);
    return;
  }

  setQuestion(question + 1);
  setCompteur(compteur + 1);
  setReponse("");


  
    // for(let i = 0 ; i<data.length ; i++){
    // console.log(data.length)

       

    //     if (reponse === lesReponses[i] && compteur < data.length) {
    //       setScore(() => score + 1);
    //       setCompteur(() => compteur + 1);
    //       setQuestion(() => question + 1);
    //       setReponse("") //pour ne pas bloque si en répond juste a la question 1

    //        if (compteur == data.length ) {
    //          alert("passage à l'écran suivant");
    //          return;
    //        }
    //     } else {
    //       setQuestion(() => question + 1);
    //       setCompteur(() => compteur + 1);
    //       setReponse("")
    //     }

        
    // }
    
  

 
   
}

const getReponse = (res) =>{
   //console.log(res)
  
  setReponse(res)
}

    return (
      //console.log(data[0].question)
      <ScreenWrapper>
        <Text>Question {question}/5</Text>
        <Text>Score :  {score}</Text>
        {console.log(data[compteur])}

        <Tittle text={data[compteur].question} />
        <ButtonCustom
          text={data[compteur].reponse1}
          secondary
          onPress={() => getReponse(data[compteur].reponse1)}
        />
        <ButtonCustom
          text={data[compteur].reponse2}
          secondary
          onPress={() => getReponse(data[compteur].reponse2)}
        />
        <ButtonCustom
          text={data[compteur].reponse3}
          secondary
          onPress={() => getReponse(data[compteur].reponse3)}
        />
        <ButtonCustom
          text={data[compteur].reponse4}
          secondary
          onPress={() => getReponse(data[compteur].reponse4)}
        />
        <ButtonCustom text="VALIDER" onPress={pageSuivante} />
      </ScreenWrapper>
    );
}