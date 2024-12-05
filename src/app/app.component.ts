import { Component } from "@angular/core"
import { FooterComponent } from "../components/footer/footer.component"
import { HeaderComponent } from "../components/header/header.component"
import { ButtonDirective } from "../directives/button/button.directive"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ButtonDirective],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
