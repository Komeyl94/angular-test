import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { NgModule } from "@angular/core";
import { TodosComponent } from "./todos/todos.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
    { path: "todos", component: TodosComponent },
    { path: "auth", component: AuthComponent },
    { path: "table", component: TableComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }