import { inject, Injectable } from '@angular/core';
// import { Firestore, collection } from '@angular/fire/firestore/firebase';
import { onSnapshot } from '@firebase/firestore';
import { User } from './interfaces/user.interface';
import { Project } from './interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  createNew = false;
  createID = false;
  createdID = '';

  users: User[] = [];
  projects: Project[] = [];

  
  // unsubUsers;
  // unsubProjects;

  // firestore: Firestore = inject(Firestore);

  constructor() {

    // this.unsubUsers = this.subUsersList();
    // this.unsubProjects = this.subProjectsList();

  }

  // subUsersList() {
  //   return onSnapshot(this.getUsersRef(), (list) => {
  //     list.forEach(element => {
  //       this.users.push(this.setUserObject(element.data(), element.id));
  //     });
  //   });
  // }

  // subProjectsList() {
  //   return onSnapshot(this.getProjectsRef(), (list) => {
  //     list.forEach(element => {
  //       this.projects.push(this.setProjectObject(element.data(), element.id));
  //     });
  //   });
  // }

  // ngonDestroy() {
  //   this.unsubUsers();
  //   this.unsubProjects();
  // }

  // getUsersRef() {
  //   return collection(this.firestore, 'users');
  // }

  // getProjectsRef() {
  //   return collection(this.firestore, 'projects');
  // }

  // setUserObject(obj: any, id: string): User {
  //   return {
  //     createdLists: obj.createdLists,
  //     email: obj.email,
  //     firstName: obj.firstName,
  //     lastName: obj.lastName,
  //     pwd: obj.pwd,
  //     signedLists: obj.string,
  //     userID: obj.userID,
  //   }
  // }

  // setProjectObject(obj: any, id: string): Project {
  //   return {
  //     email: obj.email,
  //     id: obj.id,
  //     pwd: obj.pwd,
  //     title: obj.title,
  //   }
  // }

}