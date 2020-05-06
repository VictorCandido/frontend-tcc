import { MateriasService } from './materias.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  public localMessage: string;
  public conversation = new Array();

  @ViewChild('chatBody', { static: true })
  private chatBody: ElementRef;

  private context = {};

  constructor(
    private materiaService: MateriasService
  ) { }

  ngOnInit(): void {
    this.materiaService.startConversation().subscribe(res => {
      res.output.text.forEach(text => {
        this.addRemoteMessage(text);
      });

      this.context = res.context;
    });
  }

  onKey($event) {
    if ($event.keyCode === 13) {
      this.addLocalMessage();
    }
  }

  addRemoteMessage(text) {
    this.conversation.push({ class: 'remote-message', text });

    setTimeout(() => {
      this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight + 1000;
    }, 100);
  }

  addLocalMessage() {
    if (this.localMessage) {
      this.materiaService.sendMessage(this.localMessage, this.context).subscribe((res: any) => {
        res.output.text.forEach(text => {
          this.addRemoteMessage(text);
        });

        this.context = res.context;
      });

      this.conversation.push({ class: 'local-message', text: this.localMessage });
      this.localMessage = '';

      setTimeout(() => {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight + 1000;
      }, 100);
    }
  }

}
