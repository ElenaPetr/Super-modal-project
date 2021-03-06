import { Component} from '@angular/core';
import {NgbdModalCustomclass} from './modal-customclass';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(
  private modalService: NgbModal){}
open(){
   const modalRef = this.modalService.open(NgbdModalCustomclass, { windowClass: 'dark-modal' });
  }

}
 