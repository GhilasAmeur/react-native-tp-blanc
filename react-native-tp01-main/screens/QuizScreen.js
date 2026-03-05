import { Text, View } from "react-native"
import { ButtonCustom, ScreenWrapper } from "../components"
import { useState } from "react";
import data from '../data/data.json'
import { Tittle } from "../components/Tittle";
export const QuizScreen = (navigation) =>{
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState(1)
    const [time, setTime] = useState(null)
    const [compteur, setCompteur] = useState(0)

//      useEffect(() =>{
// setTime(() =>{

// })
//         setTimeout(() => {
//             1000
//         })

//     },[time])

    return (
      //console.log(data[0].question)
      <ScreenWrapper>
        <Text>Question {question}/5</Text>
        <Text>Score {score}</Text>
        {console.log(data[compteur])}

        {/* {data[compteur].map((qes, index) => (
          <View>
            <Text>{qes.question}</Text>
            <Text>{qes.reponse1}</Text>
          </View>
        ))} */}

        <Tittle text={data[compteur].question}></Tittle>
        <ButtonCustom text={data[compteur].reponse1} secondary></ButtonCustom>
        <ButtonCustom text={data[compteur].reponse2} secondary></ButtonCustom>
        <ButtonCustom text={data[compteur].reponse3} secondary></ButtonCustom>
        <ButtonCustom text={data[compteur].reponse4} secondary></ButtonCustom>
        <ButtonCustom text = "VALIDER"/>
      </ScreenWrapper>
    );
}