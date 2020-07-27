import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, 
  children:[
    {
      path:'posts',
      loadChildren:() => import ('../posts/list-posts/list-posts.module') .then(
        m => m.ListPostsModule
      )
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
