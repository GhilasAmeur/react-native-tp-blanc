import { useState } from 'react'
import { ButtonCustom, HeaderTitle, InputCustom, ScreenWrapper } from '../components'
import { LastNameError } from '../components/LastNameError'
import { Tittle } from '../components/Tittle'

export const HomeScreen = ({ navigation }) => {
  const [prenom, setPrenom] = useState("")
  const prenomNonVide = () =>{

    //alert("cc")
    // if(prenom.trim() === ""){
    //   alert("Prénom obligatoire !")
    //   return 
    // }
  }
  return (
    <ScreenWrapper>
      <HeaderTitle text="Bienvenue !" />
      <Tittle text="Entrez votre prénom pour jouer" />

      <InputCustom
        placeholder="Entrez votre prénom"
        onChangeText={setPrenom}
        value={prenom}
      />
      {!prenom && <LastNameError text="Veuillez entrer un prénom" />}

      <ButtonCustom
        text="JOUER !"
        //onPress={() => alert(prenom)}
        onPress={() =>{
          prenomNonVide();
           navigation.navigate("Quiz", prenom)}}
      />
    </ScreenWrapper>
  );
}
