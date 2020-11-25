import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Botao from './src/Botao';
import Visor from './src/Visor';

export const initialState= {
  visor: '',
  opera:'',
  memo: '',
  operou:true
}

export default class App extends Component {
  state = { ...initialState };

  zerar = (state) => {
    this.setState({...initialState})
  }

  igualar = () => {
    if(this.state.memo == '')
      this.setState({memo:this.state.visor})
    if(this.state.opera == '')
      this.setState({visor:this.state.memo})
    else{
      let newValor;
      switch(this.state.opera){
        case '+':
          newValor = String(Number(this.state.memo)+Number(this.state.visor));                     
          break;
        case '-':
          newValor = String(Number(this.state.memo)-Number(this.state.visor));
          break;
        case '*':
          newValor = String(Number(this.state.memo)*Number(this.state.visor));
          break;
        case '/':        
          if(this.state.visor == '0'){
            newValor = 'ERRO'
          }            
          else
            newValor = String(Number(this.state.memo)/Number(this.state.visor));
          break;
        case '%':
          newValor = String(Number(this.state.memo)%Number(this.state.visor));
          break;
      }
      this.setState({memo:newValor,opera:'',visor:newValor})
    }
  }

  operador = num => {
    this.igualar();
    this.setState({opera:num,operou:true})
  }

  igual= () => {
    this.igualar();
    this.setState({operou:true});
  }

  numero= num => {
    if(this.state.visor == '0' || this.state.visor =='ERRO' || this.state.operou)
      this.setState({visor:num});      
    else{
      const newVisor = this.state.visor + num;
      this.setState({visor:newVisor})
    }  
    this.setState({operou:false}) 
  }



  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.texto} >Lista 07 - CES-26</Text>
          <Text>Carlos Figueiredo - Turma 22</Text>
        </View>        
        <Visor value={this.state.visor}></Visor>
        <View style={styles.buttons}>
          <Botao label='AC' AC double onClick={this.zerar}  />
          <Botao label='%' operation onClick={this.operador} />
          <Botao label='/' operation onClick={this.operador} />
          <Botao label='7' onClick={this.numero} />
          <Botao label='8' onClick={this.numero} />
          <Botao label='9' onClick={this.numero} />
          <Botao label='*' operation onClick={this.operador}  />
          <Botao label='4' onClick={this.numero} />
          <Botao label='5' onClick={this.numero} />
          <Botao label='6' onClick={this.numero} />
          <Botao label='-' operation onClick={this.operador} />
          <Botao label='1' onClick={this.numero} />
          <Botao label='2' onClick={this.numero} />
          <Botao label='3' onClick={this.numero} />
          <Botao label='+' operation onClick={this.operador} />
          <Botao label='0' triple  onClick={this.numero} />
          <Botao label='=' igual operation onClick={this.igual} />
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4C4',
  },
  header:{
    alignItems: 'center',
    marginTop: 30, 
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  texto:{    
    fontSize: 30,
  }

});
