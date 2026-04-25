export interface Deck {
     id: string; 
     name: string;
     description: string;
     type: 'comportamental' | 'tecnico';
     seniority: 'junior'| 'pleno'| 'senior';
     totalCards: number;
};
