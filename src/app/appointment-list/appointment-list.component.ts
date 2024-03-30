import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments');

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    // let number = this.appointments.length + 1;
    if (this.newAppointmentTitle.trim() && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: new Number(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };

      this.appointments.push(newAppointment);
    }

    // setting the values to null
    this.newAppointmentDate = new Date();
    this.newAppointmentTitle = '';

    //add data to local storage
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);

    //add data to local storage
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
