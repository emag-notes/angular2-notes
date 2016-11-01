import {Report} from './report';

class TabbedReport extends Report {
  headers: Array<string>;

  constructor(headers: string[], values: string[]) {
    super(values);
    this.headers = headers;
  }

  run() {
    console.log(this.headers);
    super.run();
  }
}

var headers: string[] = ['Name'];
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
var r: TabbedReport = new TabbedReport(headers, data);
r.run();