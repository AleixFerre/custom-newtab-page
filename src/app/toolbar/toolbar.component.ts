import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}

  openSettings() {
    this.dialog
      .open(SettingsPanelComponent, {
        width: '100%',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {
        this._snackBar.open(result ?? 'Changes discarted', 'OK', {
          duration: 5000,
        });
      });
  }
}
