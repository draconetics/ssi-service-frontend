import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CatalogComponent} from '../catalog/catalog.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AdminUsersTableNormalComponent} from '../admin-users-table-normal/admin-users-table-normal.component';
import {AdminNewUserComponent} from "../admin-new-user/admin-new-user.component";


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'users', component: AdminUsersTableNormalComponent},
  {path: 'new/user', component: AdminNewUserComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
