import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor() { }
  @Input() item:any
  @Output() onCancel = new EventEmitter()
  @Output() onDelete= new EventEmitter()

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }
  delete(){
    this.onDelete.emit(this.item)
  }

}

