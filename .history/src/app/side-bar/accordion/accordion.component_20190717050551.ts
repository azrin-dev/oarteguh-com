import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
   
   step = null;
   profile: User;
  
  constructor(
     private profileService: ProfileService
  ) { }

  ngOnInit() {
     this.profileService.profile.subscribe(
        (response: User) => {
            if(response && response.id) this.profile = response;
            else this.profile = null;
        }
     )
  }  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
