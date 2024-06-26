import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { Room } from 'src/app/model/Room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  @Input()
  room: Room;

  @Output()
  dataChangeEvent=new EventEmitter();

  message=''

  isAdminUser=false;

  constructor(private router: Router, 
    private dataService: DataService,
    private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.role==='ADMIN') this.isAdminUser=true;
    this.authService.roleSetEvent.subscribe(
      next=>{
        if (next==='ADMIN'){
          this.isAdminUser=true;
        } else{
          this.isAdminUser=false
        }
      }
    )
  }
  editRoom(){
    this.router.navigate(['admin','rooms'],{queryParams:{action: 'edit', id:this.room.id}})
  }

  deleteRoom(){
    const result=confirm('Are you sure you wish to delete this room?')
    if(result){
    this.message='deleting...';
    this.dataService.deleteRoom(this.room.id).subscribe(
      next=> {
        this.dataChangeEvent.emit();
        this.router.navigate(['admin','rooms']);
      },
      error=> this.message='Sorry this room is cannot be deleted at this time'
    )
    }
  }

}
