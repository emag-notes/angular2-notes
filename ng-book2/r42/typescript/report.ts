export class Report {
  data: Array<string>;

  constructor(data: Array<string>) {
    this.data = data;
  }

  run() {
    this.data.forEach(line => console.log(line.toUpperCase()));
  }
}

var r: Report = new Report(['First line', 'Second line']);
r.run();