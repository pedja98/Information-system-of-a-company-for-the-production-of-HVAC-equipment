import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FetchNeedsDto } from 'src/app/dto/fetchNeedsDto';
import { UserDto } from 'src/app/dto/userDto';
import { needStatuses } from 'src/app/metadata/metadata';
import { NeedService } from 'src/app/services/need/need.service';
import { DialogMsgComponent } from '../dialog-msg/dialog-msg.component';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css'],
})
export class NeedsComponent implements OnInit {
  needs: FetchNeedsDto[] = [];
  user: UserDto | null;
  readonly needStatuses = needStatuses;

  itemNumber: string = '';
  name: string = '';
  status: string = '';
  stockkeeperFullname: string = '';
  workerFullname: string = '';

  constructor(private _need: NeedService, private _dialog: MatDialog) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this._need.getNeeds().subscribe((res) => {
      this.needs = res;
    });
  }

  receive(i: number): void {
    this._need.receiveMaterials(i).subscribe((res) => {
      if (res.success) {
        this._need.getNeeds().subscribe((res) => {
          this.needs = res;
          const dialogConfig = new MatDialogConfig();
          dialogConfig.width = '320px';
          dialogConfig.height = '150px';
          dialogConfig.data = {
            msg: `Preuzeto je ${this.needs[i].count} ${this.needs[i].material.unit} materijala ${this.needs[i].material.itemNumber}`,
          };
          this._dialog.open(DialogMsgComponent, dialogConfig);
        });
      } else {
        alert(res.err);
      }
    });
  }
}
