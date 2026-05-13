import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PollinationsService {
     private readonly baseUrl = `https://text.pollinations.ai`; //endereço api

     // Função para dicas de entrevista na tela "Home".
     async gerarDicaEntrevista(): Promise<string> { // por ser um async, temos que PROMETER uma resposta
          const prompt = `Faça uma dica de no máximo 2 frases para pessoas que querem fazer entrevistas de emprego
           na área de TI. Seja objetivo mas com uma breve personalidade. Pode ser tanto algo técnico como comportamental.`

          const url = this.baseUrl + '/' + encodeURIComponent(prompt); //para enviar 

          const response = await fetch(url); // espera a resposta

          return await response.text() //pega o texo da resposta
     }

     // Função para dicas de entrevista na tela "Feedback" ao final de seções.
     async gerarFeedbackSessao(acertos: string[], erros: string[], nomeTrilha: string, descricaoTrilha: string, senioridade: string): Promise<string> {
          const prompt = `Você é um tech recruiter profissional que tem uma ótima visão de mercado.
          Diante disso, você deve fazer um feedback para o usuário de acordo com as informações que iremos te passar.
          O user fez um questionário para treinar para entrevistas chamado ${nomeTrilha}, 
          na qual tem como descrição: ${descricaoTrilha} e possui o nivel de ${senioridade}. 
          Foi marcado como "acertado" as peguntas: ${acertos}.
          Foi marcado como "errado" as peguntas: ${erros}.
          
          Diante disso, divida um feedback em duas seções: "Você foi bom em"  e "Para melhorar". Faça ele de forma objetiva, coerente e didática.
          Não se extenda demais.` 
          //O prompt é grande para dar o feedback mais personalizavel possível ao usuário

          const url = this.baseUrl + '/' + encodeURIComponent(prompt) 

          const response = await fetch(url); 

          return await response.text();
     }
}
