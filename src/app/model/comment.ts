import {ProductDTO} from './product';
import {CategoryDTO} from './category';

export class Comment {

  name: string;
  playgroundName: string;
  comment: string;

  constructor(name, playgroundName, comment) {
    this.name = name;
    this.playgroundName = playgroundName;
    this.comment = comment;
  }

}

export class DummyComments {

  private constructor() {
    this.comments = [];
    const comment1 = new Comment('Fűrész Elek', 'Penthouse', 'Amióta megvan a Penthouse játszótér, a gyerekek egésznap a szabadban vannak! Köszönöm a gyors és precíz munkát FAbrakadabra!');
    const comment2 = new Comment('Betesz Emma', 'Jumanji', 'Amióta megvan a Jumanji játszótér, a gyerekek egésznap Jumanji világában bolyonganak! Köszönöm, így végre jut időm magamra is!');
    const comment3 = new Comment('Füty Imre', 'First Class', 'A First Class játszótérrel végre előkelőnek érezhetem magam, hisz a szomszédaimnak mind csak Second és Third Class játszóterei vannak!');
    this.comments.push(comment1);
    this.comments.push(comment2);
    this.comments.push(comment3);
  }
  private static instance: DummyComments;
  private comments: Comment[];

  // tslint:disable-next-line:typedef
  public static getInstance() {
    if (!this.instance) {
      this.instance = new DummyComments();
    }
    return this.instance;
  }

  public getComments(): Comment[] {
    return this.comments;
  }
}
