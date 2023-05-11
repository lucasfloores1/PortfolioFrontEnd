import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/Skills';
import { MatDialog } from '@angular/material/dialog';
import { SkillsAddComponent } from 'src/app/components/skills-add/skills-add.component';
import { SkillsService } from 'src/app/services/skills.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  showEdit : boolean = false;
  
  skills : Skills[]

  //pewview of a new skill to add
  private newSkill: Skills = {
    id: 0,
    color: 'primary',
    name: 'Habilidad',
    value : 85,
  };

  constructor( public authService : AuthorizationService ,public dialog: MatDialog, private skillsService : SkillsService ){

    this.skills=[]

  }
  
  ngOnInit(): void {

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )

    this.skillsService.loadSkills().subscribe( response => { this.skills = response } )
    
  }
  
  openDialog(){

    const dialogRef = this.dialog.open(SkillsAddComponent,{

      width: '600px',
      data: this.newSkill,
      disableClose : true,
      enterAnimationDuration : 350,

    });

    dialogRef.afterClosed().subscribe(result => {
      this.skillsService.createSkills(result).subscribe( response => { this.skills.push(response) } )
      });
  }

  updateSkill( updatedSkill : Skills ) : void {
    this.skillsService.updateSkills(updatedSkill)
  }

  deleteSkill( skill : Skills ) : void {
    
    this.skillsService.deleteSkills(skill).subscribe( response => { this.skills = this.skills.filter( t => t.id !== skill.id ) } )

  }





}
