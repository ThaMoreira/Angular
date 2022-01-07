import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
/*  template: `
    <app-server></app-server>
    <app-server></app-server>`, */
    templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Não foi criado um servidor!';
  serverName ='TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated =  true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Servidor ' + this.serverName +' criado com sucesso!';
  }

  onUpdateServerName(event: any){
    this.serverName= (<HTMLInputElement>event.target).value;
  }
}
