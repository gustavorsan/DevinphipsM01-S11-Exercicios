import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  showModal = true;

  toggleModalOpen(){
    this.showModal = !this.showModal;
  }
}
