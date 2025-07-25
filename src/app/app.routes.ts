import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'contacto', component: ContactComponent },
      { path: 'datos-personales', component: PersonalDataComponent },
      { path: 'habilidades', component: SkillsComponent},
      { path: 'estudios', component: StudiesComponent},
      { path: 'experiencia-laboral', component: ExperienceComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
