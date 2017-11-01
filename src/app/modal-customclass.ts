import { Component,ViewEncapsulation } from '@angular/core';

import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-customclass',
  templateUrl: './modal-customclass.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})
export class NgbdModalCustomclass {
  closeResult: string;

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal) {}

  // open(content) {
  //   this.modalService.open(content, { windowClass: 'dark-modal' });
  // }

}