export interface ISearchReponse extends Axios.AxiosXHR<Topic[]> {
}

export class Snippet {
  body: string[];

  constructor(data: any) {
    this.body = data.Body
  }
}

export class Topic {
  id: string;
  title: string;
  snippets: Snippet[];

  constructor(data: any) {
    this.id = data.Id;
    this.title = data.Title.trim();
    this.snippets = data.Solutions.map((solution: any) => new Snippet(solution));
  }
}

export class BorgSearchResponse {
  data: Topic[];

  constructor(response: any) {
    this.data = response.data.map((topic: any) => new Topic(topic));
  }
}

